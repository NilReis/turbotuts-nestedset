<div>

    <button class="btn btn-sm btn-primary" style="float: right;" data-toggle="modal" data-target="#addStudentModal">Add New
        Student</button>

    <!-- Modal -->
    <div wire:ignore.self class="modal fade" id="addStudentModal" tabindex="-1" data-backdrop="static" data-keyboard="false"
        role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add New Student</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <form wire:submit.prevent="submit">
                        <div class="form-group row">
                            <label for="student_id" class="col-3">Student ID</label>
                            <div class="col-9">
                                <input type="number" id="student_id" class="form-control" wire:model="student_id">
                                @error('student_id')
                                    <span class="text-danger" style="font-size: 11.5px;">{{ $message }}</span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="name" class="col-3">Name</label>
                            <div class="col-9">
                                <input type="text" id="name" class="form-control" wire:model="name">
                                @error('name')
                                    <span class="text-danger" style="font-size: 11.5px;">{{ $message }}</span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-3">Email</label>
                            <div class="col-9">
                                <input type="email" id="email" class="form-control" wire:model="email">
                                @error('email')
                                    <span class="text-danger" style="font-size: 11.5px;">{{ $message }}</span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="phone" class="col-3">Phone</label>
                            <div class="col-9">
                                <input type="number" id="phone" class="form-control" wire:model="phone">
                                @error('phone')
                                    <span class="text-danger" style="font-size: 11.5px;">{{ $message }}</span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="" class="col-3"></label>
                            <div class="col-9">
                                <button type="submit" class="btn btn-sm btn-primary">Add Student</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    @php
        $count = 0;
    @endphp
    <button type="button" class="btn btn-primary" onclick="hidevideos()">Show Videos</button>

    <input type="hidden" name="" id="playlistidhidden" value="{{ $playlist }}">

    <div id="accordion">
        @foreach ($videos as $item)
            @php
                $count++;
            @endphp

            <div class="card">
                <div class="card-header" id="heading-{{ $count }}">
                    <h5 class="mb-0">
                        <a role="button" data-toggle="collapse" href="#collapse-{{ $count }}"
                            aria-expanded="true" aria-controls="collapse-{{ $count }}">
                            {{ $item->title }}
                        </a>
                    </h5>
                </div>
                <div id="collapse-{{ $count }}" class="collapse" data-parent="#accordion"
                    aria-labelledby="heading-{{ $count }}">
                    <div class="card-body">
                        <img class="" src="{{ $item->thumbnail_src }}" alt="Card image cap">
                        <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-secondary" onclick="openVideo('{{ $item->id }}')">FHD</button>

                            <button type="button" class="btn btn-secondary">HD</button>
                            <button type="button" class="btn btn-secondary">SD</button>
                            <button type="button" class="btn btn-primary" data-toggle="modal"
                                data-target="#myModal">
                                Abrir Popup
                            </button>
                        </div>

                        <div id="accordion-{{ $count }}">
                            <div class="card">
                                <div class="card-header" id="heading-{{ $count }}-1">
                                    <h5 class="mb-0">
                                        <a class="collapsed" role="button" data-toggle="collapse"
                                            href="#collapse-{{ $count }}-1" aria-expanded="false"
                                            aria-controls="collapse-{{ $count }}-1">
                                            Descrição
                                        </a>
                                    </h5>

                                </div>
                                <div id="collapse-{{ $count }}-1" class="collapse"
                                    data-parent="#accordion-{{ $count }}"
                                    aria-labelledby="heading-{{ $count }}-1" style="">
                                    <div class="card-body">
                                        {{ $item->description }}
                                        <div id="accordion-{{ $count }}-1"></div>

                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="heading-{{ $count }}-{{ $item->id }}">
                                    <h5 class="mb-0">
                                        <a class="" role="button" data-toggle="collapse"
                                            href="#collapse-{{ $count }}-{{ $item->id }}"
                                            aria-expanded="true" aria-controls="collapse-1-{{ $item->id }}">
                                            Capítulos
                                        </a>
                                    </h5>
                                </div>
                                <div id="collapse-{{ $count }}-{{ $item->id }}" class="collapse"
                                    data-parent="#accordion-{{ $count }}"
                                    aria-labelledby="heading-{{ $count }}-2" style="">
                                    <div class="card-body">

                                        @forelse ($item->marker as $marker)
                                            {{ $marker->label }}<br>
                                        @empty
                                            <p>Não há capítulos</p>
                                        @endforelse

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        @endforeach
    </div>

</div>


<!-- Popup -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="myModalLabel">Título do Popup</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label for="texto">Texto:</label>
                        <input type="text" class="form-control" id="texto">
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal"
                    onclick="salvarTexto()">Salvar</button>

            </div>
        </div>
    </div>
</div>


@push('scripts')
    <script>
        window.addEventListener('close-modal', event => {
            $('#addStudentModal').modal('hide');

        });
    </script>
@endpush

<script>
    function salvarTexto() {
        // Obtenha o valor do campo de texto
        var texto = document.getElementById("texto").value;

        // Faça algo com o texto, como enviá-lo para o servidor ou salvá-lo no armazenamento local do navegador
        console.log("O texto digitado é: " + window.currentId + " " + texto + " " + player.currentTime());
        document.getElementById("texto").value = "";

        //@this.AddMarker(window.currentId, texto, player.currentTime());

        // Feche o popup
        $('#myModal').modal('hide');
    }

    function hidevideos(id) {
        // Run a callback when an event ("foo") is emitted from this component
        //window.livewire.find('w04s3oPt9bburBozlw09').addVideos(id);
        $('#videoslist').hide();
        $('#playlist').show();
        $('#videjsplayer').show();
    }

    function openVideo(id) {

        $.get('/api/topicjson/getCurrentVideo/' + id, function(d) {
            console.log(d);
            player.src({
                type: 'video/mp4',
                src: d.youtubeid
            })
            player.play()

            //$("#descriptionText").html(d.description);

            // $('#data .default').text(d.content).show();


            // player.overlay({
            //     content: d.title,
            //     debug: true,
            //     overlays: [{
            //         content: d.title,
            //         start: 'pause',
            //         end: 'play'
            //     }]
            // });

        });


        window.currentId = id;

        // $('#title').text(teste.title);

    }

    function next() {


        $.get('/api/topicjson/NextVideo/' + window.currentId, function(d) {
            console.log(d);
            player.src({
                type: 'video/mp4',
                src: d.youtubeid
            })
            player.play()
            window.currentId = d.id;

            player.overlay({
                content: d.title,
                debug: true,
                overlays: [{
                    content: d.title,
                    start: 'pause',
                    end: 'play'
                }]
            });

            //$("#descriptionText").html(d.description);

            // $('#data .default').text(d.content).show();
        });
        // window.livewire.find('w04s3oPt9bburBozlw09').next();

        // let teste = window.livewire.find('w04s3oPt9bburBozlw09').youTubeVideo;
        // player.src({
        //     type: 'video/mp4',
        //     src: teste.youtubeid
        // })
        // player.play()
        // console.log(teste);
        // var currentId = id;
        // $('#title').text(teste.title);
    }

    function previous() {

        $.get('/api/topicjson/PreviuosVideo/' + window.currentId, function(d) {
            console.log(d);
            player.src({
                type: 'video/mp4',
                src: d.youtubeid
            })
            player.play()
            window.currentId = d.id;

            player.overlay({
                content: d.title,
                debug: true,
                overlays: [{
                    content: d.title,
                    start: 'pause',
                    end: 'play'
                }]
            });

            //$("#descriptionText").html(d.description);

            // $('#data .default').text(d.content).show();
        });

        // window.livewire.find('w04s3oPt9bburBozlw09').previous();
        // let teste = window.livewire.find('w04s3oPt9bburBozlw09').youTubeVideo;
        // player.src({
        //     type: 'video/mp4',
        //     src: teste.youtubeid
        // })
        // player.play()
        // console.log(teste);
        // var currentId = id;
        // $('#title').text(teste.title);

    }
</script>
