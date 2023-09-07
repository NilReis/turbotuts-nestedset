@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
<title>Vue.js + Bootstrap Example</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://vjs.zencdn.net/7.8.4/video-js.css" rel="stylesheet" />

@stop

@section('content')

<div id="app" class="container-fluid">
    <div class="row">
        <div class="col-lg-3 col-6">
            <!-- Nav tabs -->
            <ul class="nav nav-tabs" id="myTabs" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="courses-tab" data-bs-toggle="tab" href="#courses" role="tab"
                        aria-controls="courses" aria-selected="true">Courses</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="videos-tab" data-bs-toggle="tab" href="#videos" role="tab"
                        aria-controls="videos" aria-selected="false">Videos</a>
                </li>
            </ul>

            <!-- Tab panes -->
            <div class="tab-content">
                <div class="tab-pane active" id="courses" role="tabpanel" aria-labelledby="courses-tab">
                    <course-list :initial-courses="courses" @update-videos="updateVideos"></course-list>
                </div>
                <div class="tab-pane" id="videos" role="tabpanel" aria-labelledby="videos-tab">
                    <video-accordion :videos="videos" v-if="selectedCourse" @video-title-selected="updateVideoTitle">
                    </video-accordion>
                </div>
            </div>
        </div>
        <div class="col-lg-9 col-12">
            <div id="video-container">
                <div class="video-title" v-if="currentVideoTitle">@{{ currentVideoTitle }}</div>
                <video id="my-video" class="video-js" controls preload="auto">
                </video>
            </div>
            <div id="capture-container" style="display: none;">
                <canvas id="canvas" width="640" height="264"></canvas>
                <button id="capture">Capturar imagem</button>
                <button id="draw-rectangle">Desenhar retângulo</button>
                <button id="draw-arrow">Desenhar seta</button>
                <button id="draw-text">Escrever texto</button>
                <input id="text-input" type="text" placeholder="Digite seu texto aqui" />

                <!-- Campo para o título do capítulo -->
                <input id="chapter-title" type="text" placeholder="Título do capítulo" />

                <!-- Botão para enviar a imagem do canvas para o servidor -->
                <button id="submit-capture">Enviar imagem</button>

                <button id="close-capture">Fechar</button>
                <input type="hidden" id="video-id" value="">

            </div>
        </div>
    </div>
</div>

<template id="course-list-template">
    <div class="course-list scrollable" style="height: 80vh; overflow: auto;">
        <div class="card" style="width: 18rem;" v-for="course in courses" :key="course.id">
            <img :src="course.thumbnail" class="card-img-top" alt="Course Thumbnail">
            <div class="card-body">
                <h5 class="card-title">@{{ course.title }}</h5>
                <p class="card-text">@{{ course.description }}</p>
                <button class="btn btn-primary" @click="selectCourse(course)">Open Course</button>
                <button class="btn btn-danger" @click="deleteCourse(course.id)">Delete Course</button>
            </div>
        </div>
    </div>
</template>


<template id="video-accordion-template">
    <div class="accordion" id="videoAccordion" style="height: 80vh; overflow: auto;">
        <div class="accordion-item" v-for="(video, index) in videos" :key="video.id">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    :data-bs-target="'#collapse'+video.id">
                    @{{ video.title }}
                </button>
                <!-- Button to open the video -->
                <button class="btn btn-primary" @click="loadVideo(video)">Open Video</button>
            </h2>
            <div :id="'collapse'+video.id" class="accordion-collapse collapse" data-bs-parent="#videoAccordion">
                <div class="accordion-body">
                    <chapter-list ref="chapterListComponent" :chapters="video.chapters" :video-id="video.id"></chapter-list>
                </div>
            </div>
        </div>
    </div>
</template>


<template id="chapter-list-template">
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="chapter in chapters" :key="chapter.id">
                <span class="badge bg-secondary" @{{ chapter.time }}</span>
                    @{{ chapter.label }}
            </li>
        </ul>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/axios@0.26.1/dist/axios.min.js"></script>
<script src="https://vjs.zencdn.net/7.8.4/video.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>


<script id="Vuejs">
Vue.component('video-accordion', {
    props: ['videos'],
    template: '#video-accordion-template',
    methods: {
        loadVideo: function(video) {
            // Make an Axios request to get the video URL
            document.getElementById('video-id').value = video.id;


            axios.get(`http://turbotuts-nestedset.test/api/topicjson/getCurrentVideo/${video.id}`)
                .then(response => {
                    // Emit the video data to the parent component
                    this.$emit('video-title-selected', video.title); // Emitting the title

                    var player = videojs('my-video');
                    player.src({
                        type: "video/mp4",
                        src: response.data.url
                    });
                    player.play().catch(error => alert(`Error playing video: ${error.message}`));



                })
                .catch(error => {
                    console.log("Error loading video:", error);
                    this.$emit('video-title-selected', ''); // reset the title on error

                });
        }
    }
});

Vue.component('chapter-list', {
    props: ['chapters', 'videoId'],
    data: function() {
        return {
            newChapter: {
                time: '',
                label: '',
                videoId: this.videoId
            }
        }
    },
    methods: {
        getCurrentTime: function() {
            // Obtém a referência ao player de vídeo
            var player = videojs('my-video');

            // Retorna o tempo atual do vídeo
            return player.currentTime();
        },
        addChapter: function(chapter) {
            // Adiciona o novo capítulo à lista
            this.chapters.push(chapter);
        }
    },
    template: '#chapter-list-template'
});

Vue.component('course-list', {
    props: {
        initialCourses: {
            type: Array,
            default: function() {
                return [];
            }
        },
    },
    template: '#course-list-template',
    data: function() {
        return {
            selectedCourse: [],
            courses: Array.from(this.initialCourses), // Copies initialCourses into data
        };
    },
    methods: {
        selectCourse: function(course) {

            axios.get(`http://turbotuts-nestedset.test/api/video/${course.id}`)
                .then(response => {
                    console.log("Dados do curso recebidos:", response.data);
                    this.selectedCourse = response.data;
                    this.videos = this.selectedCourse;
                    this.$emit('course-selected', this.selectedCourse);
                    this.$emit('update-videos', this.selectedCourse);

                })
                .catch(error => console.log("Erro ao carregar curso:", error));
        },
        deleteCourse: function(courseId) {
            axios.delete('http://turbotuts-nestedset.test/api/course/' + courseId)
                .then(response => {
                    this.courses = this.courses.filter(course => course.id !== courseId);
                })
                .catch(error => console.log(error));
        }
    },
    mounted: function() {
        axios.get('http://turbotuts-nestedset.test/api/categoryjson/{{$playlistId}}')
            .then(response => (this.courses = response.data))
            .catch(error => console.log(error));
    }
});


new Vue({
    el: '#app',
    data: {
        courses: [],
        selectedCourse: [],
        videos: [],
        selectedVideo: null,
        currentVideoTitle: ''
    },
    methods: {
        updateVideos(videos) { // Defina este método
            this.videos = videos;
        },
        updateVideoTitle(title) {
            this.currentVideoTitle = title;
        }
    },
    mounted: function() {
        // código existente aqui
    },
    watch: {
        currentVideoTitle: function(newVal, oldVal) {
            console.log('Title changed from', oldVal, 'to', newVal);
        }
    }
});
</script>


<script id="Drawling">
const player = videojs('my-video')
const videoElement = document.querySelector('#my-video_html5_api')
const captureButton = document.getElementById('capture')
const drawRectangleButton = document.getElementById('draw-rectangle')
const drawArrowButton = document.getElementById('draw-arrow')
const drawTextButton = document.getElementById('draw-text')
const textInput = document.getElementById('text-input')
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

videoElement.addEventListener('loadedmetadata', function() {
    canvas.width = this.videoWidth
    canvas.height = this.videoHeight
})
const videoContainer = document.getElementById('video-container')
const captureContainer = document.getElementById('capture-container')

const closeButton = document.getElementById('close-capture')

closeButton.addEventListener('click', () => {
    videoContainer.style.display = 'block'
    captureContainer.style.display = 'none'
})

player.ready(function() {
    const videoElement = player.el().firstChild

    videoElement.addEventListener('loadedmetadata', function() {
        canvas.width = this.videoWidth
        canvas.height = this.videoHeight
    })

    const Button = videojs.getComponent('Button')
    const CaptureButton = videojs.extend(Button, {
        constructor: function() {
            Button.apply(this, arguments)
        },
        createEl: function() {
            return Button.prototype.createEl.call(this, 'button', {
                className: 'vjs-capture-button',
                innerHTML: 'Capturar imagem',
            })
        },
        handleClick: function() {
            shapes.length = 0 // Limpa as formas anteriores

            ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height)
            videoContainer.style.display = 'none'
            captureContainer.style.display = 'block'
            player.pause()

            // Sair do modo de tela cheia ao capturar a imagem
            player.exitFullscreen()
        },
    })

    player.controlBar.addChild(new CaptureButton(), {}, 0)
})

let drawing = false
let drawMode = 'none'
let x = 0
let y = 0
const shapes = []

captureButton.addEventListener('click', () => {
    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height)
    shapes.length = 0 // Limpa as formas anteriores
})

drawRectangleButton.addEventListener('click', () => {
    drawMode = drawMode === 'rectangle' ? 'none' : 'rectangle'
})

drawArrowButton.addEventListener('click', () => {
    drawMode = drawMode === 'arrow' ? 'none' : 'arrow'
})

drawTextButton.addEventListener('click', () => {
    drawMode = drawMode === 'text' ? 'none' : 'text'
})

function drawArrow(ctx, fromX, fromY, toX, toY) {
    const headLength = 10
    const dx = toX - fromX
    const dy = toY - fromY
    const angle = Math.atan2(dy, dx)
    ctx.moveTo(fromX, fromY)
    ctx.lineTo(toX, toY)
    ctx.lineTo(
        toX - headLength * Math.cos(angle - Math.PI / 6),
        toY - headLength * Math.sin(angle - Math.PI / 6),
    )
    ctx.moveTo(toX, toY)
    ctx.lineTo(
        toX - headLength * Math.cos(angle + Math.PI / 6),
        toY - headLength * Math.sin(angle + Math.PI / 6),
    )
}

function redrawShapes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height)
    shapes.forEach((shape) => {
        ctx.beginPath()
        if (shape.type === 'rectangle') {
            ctx.rect(shape.x, shape.y, shape.width, shape.height)
        } else if (shape.type === 'arrow') {
            drawArrow(ctx, shape.fromX, shape.fromY, shape.toX, shape.toY)
        } else if (shape.type === 'text') {
            ctx.font = '20px Arial'
            ctx.fillStyle = 'red' // Define a cor do preenchimento como vermelho
            ctx.fillText(shape.text, shape.x, shape.y)
            return
        }
        ctx.strokeStyle = 'red'
        ctx.lineWidth = 2
        ctx.stroke()
    })
}

canvas.addEventListener('mousedown', (e) => {
    if (drawMode === 'none') return

    x = e.offsetX
    y = e.offsetY
    drawing = true
})

canvas.addEventListener('mousemove', (e) => {
    if (!drawing || drawMode === 'none' || drawMode === 'text') return

    redrawShapes()

    ctx.beginPath()
    if (drawMode === 'rectangle') {
        ctx.rect(x, y, e.offsetX - x, e.offsetY - y)
    } else if (drawMode === 'arrow') {
        drawArrow(ctx, x, y, e.offsetX, e.offsetY)
    }
    ctx.strokeStyle = 'red'
    ctx.lineWidth = 2
    ctx.stroke()
})

canvas.addEventListener('mouseup', (e) => {
    if (drawMode === 'rectangle') {
        shapes.push({
            type: 'rectangle',
            x: x,
            y: y,
            width: e.offsetX - x,
            height: e.offsetY - y,
        })
    } else if (drawMode === 'arrow') {
        shapes.push({
            type: 'arrow',
            fromX: x,
            fromY: y,
            toX: e.offsetX,
            toY: e.offsetY,
        })
    }

    drawing = false
})

canvas.addEventListener('click', (e) => {
    if (drawMode !== 'text') return

    shapes.push({
        type: 'text',
        text: textInput.value,
        x: e.offsetX,
        y: e.offsetY,
    })

    redrawShapes()
})
</script>

<script id="SendSnapshot">
document.getElementById('submit-capture').addEventListener('click', function() {
    const canvas = document.getElementById('canvas');
    const chapterTitle = document.getElementById('chapter-title').value;
    const videoId = document.getElementById('video-id').value;

    const currentTime = player.currentTime(); // Pega o tempo atual em segundos

    // Converta o canvas para uma imagem em formato base64
    const imageData = canvas.toDataURL('image/png');

    // Aqui você pode fazer uma requisição AJAX para enviar a imagem para o servidor
    axios.post('http://turbotuts-nestedset.test/api/marker', {
            label: chapterTitle, // This is the title
            image: imageData, // This is the base64 image data
            video_id: videoId,
            time: currentTime // This is the current time of the video in seconds

        })
        .then(response => {
            // Se a imagem for salva com sucesso, a URL da imagem será retornada
            const imageUrl = response.data.url;
            console.log(response.data.message);
            // Aqui você pode salvar a URL da imagem no campo 'url' da tabela 'chapter'
            // ...

            let chapterListComponent = this.$refs.chapterListComponent;


            chapterListComponent.addChapter({
                time: currentTime,
                label: chapterTitle,
                videoId: videoId
            }.bind(this));
        })
        .catch(error => {
            console.error('Erro ao enviar a imagem:', error);
        });
});
</script>

@stop

@section('css')
<!-- {{-- <link rel="stylesheet" href="/css/admin_custom.css"> --}} -->
<style>
#video-container {
    position: relative;
}

.video-title {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 10px;
    z-index: 1;
}
</style>
@stop

@section('js')

@stop