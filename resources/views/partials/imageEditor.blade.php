<div>
    <link type="text/css" href="https://uicdn.toast.com/tui-color-picker/v2.2.6/tui-color-picker.css"
        rel="stylesheet" />
    <link type="text/css" href="/css/service-basic.css" rel="stylesheet" />
    <div class="body-container">
        <div contenteditable class="tui-image-editor"></div>
        <div class="tui-image-editor-controls">
            <div class="header">
                <img class="logo" src="img/TOAST UI Component.png" />
                <span class="name"> Image Editor</span>
                <ul class="menu">
                    <li class="menu-item border input-wrapper">
                        Load
                        <input type="file" accept="image/*" id="input-image-file" />
                    </li>
                    <li class="menu-item border" id="btn-download">Download</li>
                    <li class="menu-item border" id="btn-paste" onclick="paste()">Paste</li>
                    <li class="menu-item border" id="btn-save" onclick="salvar()">Salvar</li>

                    <li class="menu-item border" onclick="pasteImageBitmap()">Paste image bitmap from clipboard</li>

                </ul>
            </div>
            <ul class="menu">
                <li class="menu-item disabled" id="btn-undo">Undo</li>
                <li class="menu-item disabled" id="btn-redo">Redo</li>
                <li class="menu-item" id="btn-clear-objects">ClearObjects</li>
                <li class="menu-item" id="btn-remove-active-object">RemoveActiveObject</li>
                <li class="menu-item" id="btn-crop">Crop</li>
                <li class="menu-item" id="btn-flip">Flip</li>
                <li class="menu-item" id="btn-rotation">Rotation</li>
                <li class="menu-item" id="btn-draw-line">DrawLine</li>
                <li class="menu-item" id="btn-draw-shape">Shape</li>
                <li class="menu-item" id="btn-add-icon">Icon</li>
                <li class="menu-item" id="btn-text">Text</li>
                <li class="menu-item" id="btn-mask-filter">Mask</li>
                <li class="menu-item" id="btn-image-filter">Filter</li>
            </ul>
            <div class="sub-menu-container" id="crop-sub-menu">
                <ul class="menu">
                    <li class="menu-item" id="btn-apply-crop">Apply</li>
                    <li class="menu-item" id="btn-cancel-crop">Cancel</li>
                </ul>
            </div>
            <div class="sub-menu-container" id="flip-sub-menu">
                <ul class="menu">
                    <li class="menu-item" id="btn-flip-x">FlipX</li>
                    <li class="menu-item" id="btn-flip-y">FlipY</li>
                    <li class="menu-item" id="btn-reset-flip">Reset</li>
                    <li class="menu-item close">Close</li>
                </ul>
            </div>
            <div class="sub-menu-container" id="rotation-sub-menu">
                <ul class="menu">
                    <li class="menu-item" id="btn-rotate-clockwise">Clockwise(30)</li>
                    <li class="menu-item" id="btn-rotate-counter-clockwise">Counter-Clockwise(-30)</li>
                    <li class="menu-item no-pointer">
                        <label>
                            Range input
                            <input id="input-rotation-range" type="range" min="-360" value="0" max="360" />
                        </label>
                    </li>
                    <li class="menu-item close">Close</li>
                </ul>
            </div>
            <div class="sub-menu-container menu" id="draw-line-sub-menu">
                <ul class="menu">
                    <li class="menu-item">
                        <label>
                            <input type="radio" name="select-line-type" value="freeDrawing" checked="checked" />
                            Free drawing
                        </label>
                        <label>
                            <input type="radio" name="select-line-type" value="lineDrawing" />
                            Straight line
                        </label>
                    </li>
                    <li class="menu-item">
                        <div id="tui-brush-color-picker">Brush color</div>
                    </li>
                    <li class="menu-item">
                        <label class="menu-item no-pointer">
                            Brush width
                            <input id="input-brush-width-range" type="range" min="5" max="30" value="12" />
                        </label>
                    </li>
                    <li class="menu-item close">Close</li>
                </ul>
            </div>
            <div class="sub-menu-container" id="draw-shape-sub-menu">
                <ul class="menu">
                    <li class="menu-item">
                        <label>
                            <input type="radio" name="select-shape-type" value="rect" checked="checked" />
                            rect
                        </label>
                        <label>
                            <input type="radio" name="select-shape-type" value="circle" />
                            circle
                        </label>
                        <label>
                            <input type="radio" name="select-shape-type" value="triangle" />
                            triangle
                        </label>
                    </li>
                    <li class="menu-item">
                        <select name="select-color-type">
                            <option value="fill">Fill</option>
                            <option value="stroke">Stroke</option>
                        </select>
                        <label>
                            <input type="radio" name="input-check-fill" id="input-check-transparent" value="transparent"
                                checked="checked" />
                            transparent
                        </label>
                        <label>
                            <input type="radio" name="input-check-fill" id="input-check-filter" value="filter" />
                            filter
                        </label>
                        <div id="tui-shape-color-picker"></div>
                    </li>
                    <li class="menu-item">
                        <label class="menu-item no-pointer">
                            Stroke width
                            <input id="input-stroke-width-range" type="range" min="0" max="300" value="12" />
                        </label>
                    </li>
                    <li class="menu-item close">Close</li>
                </ul>
            </div>
            <div class="sub-menu-container" id="icon-sub-menu">
                <ul class="menu">
                    <li class="menu-item">
                        <div id="tui-icon-color-picker">Icon color</div>
                    </li>
                    <li class="menu-item border" id="btn-register-icon">Register custom icon</li>
                    <li class="menu-item icon-text" data-icon-type="arrow">➡</li>
                    <li class="menu-item icon-text" data-icon-type="cancel">✖</li>
                    <li class="menu-item close">Close</li>
                </ul>
            </div>
            <div class="sub-menu-container" id="text-sub-menu">
                <ul class="menu">
                    <li class="menu-item">
                        <div>
                            <button class="btn-text-style" data-style-type="b">Bold</button>
                            <button class="btn-text-style" data-style-type="i">Italic</button>
                            <button class="btn-text-style" data-style-type="u">Underline</button>
                        </div>
                        <div>
                            <button class="btn-text-style" data-style-type="l">Left</button>
                            <button class="btn-text-style" data-style-type="c">Center</button>
                            <button class="btn-text-style" data-style-type="r">Right</button>
                        </div>
                    </li>
                    <li class="menu-item">
                        <label class="no-pointer">
                            <input id="input-font-size-range" type="range" min="10" max="100" value="10" />
                        </label>
                    </li>
                    <li class="menu-item">
                        <div id="tui-text-color-picker">Text color</div>
                    </li>
                    <li class="menu-item close">Close</li>
                </ul>
            </div>
            <div class="sub-menu-container" id="filter-sub-menu">
                <ul class="menu">
                    <li class="menu-item border input-wrapper">
                        Load Mask Image
                        <input type="file" accept="image/*" id="input-mask-image-file" />
                    </li>
                    <li class="menu-item" id="btn-apply-mask">Apply mask filter</li>
                    <li class="menu-item close">Close</li>
                </ul>
            </div>
            <div class="sub-menu-container" id="image-filter-sub-menu">
                <ul class="menu">
                    <li class="menu-item align-left-top">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <label><input type="checkbox" id="input-check-grayscale" />Grayscale</label>
                                    </td>
                                    <td>
                                        <label><input type="checkbox" id="input-check-invert" />Invert</label>
                                    </td>
                                    <td>
                                        <label><input type="checkbox" id="input-check-sepia" />Sepia</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label><input type="checkbox" id="input-check-sepia2" />Sepia2</label>
                                    </td>
                                    <td>
                                        <label><input type="checkbox" id="input-check-blur" />Blur</label>
                                    </td>
                                    <td>
                                        <label><input type="checkbox" id="input-check-sharpen" />Sharpen</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label><input type="checkbox" id="input-check-emboss" />Emboss</label>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </li>
                    <li class="menu-item align-left-top">
                        <p>
                            <label>
                                <input type="checkbox" id="input-check-remove-white" />
                                RemoveWhite
                            </label>
                            <br />
                            <label>
                                Distance
                                <input class="range-narrow" id="input-range-remove-white-distance" type="range"
                                    min="0" value="10" max="255" />
                            </label>
                        </p>
                    </li>
                    <li class="menu-item align-left-top">
                        <p>
                            <label><input type="checkbox" id="input-check-brightness" />Brightness</label><br />
                            <label>
                                Value
                                <input class="range-narrow" id="input-range-brightness-value" type="range" min="-255"
                                    value="100" max="255" />
                            </label>
                        </p>
                    </li>
                    <li class="menu-item align-left-top">
                        <p>
                            <label><input type="checkbox" id="input-check-noise" />Noise</label><br />
                            <label>
                                Value
                                <input class="range-narrow" id="input-range-noise-value" type="range" min="0"
                                    value="100" max="1000" />
                            </label>
                        </p>
                    </li>
                    <li class="menu-item align-left-top">
                        <p>
                            <label>
                                <input type="checkbox" id="input-check-color-filter" />
                                ColorFilter
                            </label>
                            <br />
                            <label>
                                Threshold
                                <input class="range-narrow" id="input-range-color-filter-value" type="range" min="0"
                                    value="45" max="255" />
                            </label>
                        </p>
                    </li>
                    <li class="menu-item align-left-top">
                        <p>
                            <label><input type="checkbox" id="input-check-pixelate" />Pixelate</label><br />
                            <label>
                                Value
                                <input class="range-narrow" id="input-range-pixelate-value" type="range" min="2"
                                    value="4" max="20" />
                            </label>
                        </p>
                    </li>
                    <li class="menu-item align-left-top">
                        <p>
                            <label><input type="checkbox" id="input-check-tint" />Tint</label><br />
                        </p>
                        <div id="tui-tint-color-picker"></div>
                        <label>
                            Opacity
                            <input class="range-narrow" id="input-range-tint-opacity-value" type="range" min="0"
                                value="1" max="1" step="0.1" />
                        </label>
                    </li>
                    <li class="menu-item align-left-top">
                        <p>
                            <label><input type="checkbox" id="input-check-multiply" />Multiply</label>
                        </p>
                        <div id="tui-multiply-color-picker"></div>
                    </li>
                    <li class="menu-item align-left-top">
                        <p>
                            <label><input type="checkbox" id="input-check-blend" />Blend</label>
                        </p>
                        <div id="tui-blend-color-picker"></div>
                        <select name="select-blend-type">
                            <option value="add" selected>Add</option>
                            <option value="diff">Diff</option>
                            <option value="diff">Subtract</option>
                            <option value="multiply">Multiply</option>
                            <option value="screen">Screen</option>
                            <option value="lighten">Lighten</option>
                            <option value="darken">Darken</option>
                        </select>
                    </li>
                    <li class="menu-item close">Close</li>
                </ul>
            </div>
        </div>
    </div>
    <script type="text/javascript"
        src="https://api-storage.cloud.toast.com/v1/AUTH_e18353c4ea5746c097143946d0644e61/toast-ui-cdn/tui-image-editor/v3.11.0/example/fabric-v4.2.0.js">
    </script>
    <script type="text/javascript" src="https://uicdn.toast.com/tui.code-snippet/v1.5.0/tui-code-snippet.min.js"></script>
    <script type="text/javascript" src="https://uicdn.toast.com/tui-color-picker/v2.2.6/tui-color-picker.min.js"></script>
    <script type="text/javascript" {{-- src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.8.3/jquery.min.js" --}}></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.3/FileSaver.min.js">
    </script>
    <script type="text/javascript" src="https://uicdn.toast.com/tui-image-editor/latest/tui-image-editor.js"></script>
    


</div>

<script>
    var ClipboardUtils = new function() {
        var permissions = {
            'image/bmp': true,
            'image/gif': true,
            'image/png': true,
            'image/jpeg': true,
            'image/tiff': true
        };

        function getType(types) {
            for (var j = 0; j < types.length; ++j) {
                var type = types[j];
                if (permissions[type]) {
                    return type;
                }
            }
            return null;
        }

        function getItem(items) {
            for (var i = 0; i < items.length; ++i) {
                var item = items[i];
                if (item) {
                    var type = getType(item.types);
                    if (type) {
                        return item.getType(type);
                    }
                }
            }
            return null;
        }

        function loadFile(file, callback) {
            if (window.FileReader) {
                var reader = new FileReader();
                reader.onload = function() {
                    callback(reader.result, null);
                };
                reader.onerror = function() {
                    callback(null, 'Incorrect file.');
                };
                reader.readAsDataURL(file);
            } else {
                callback(null, 'File api is not supported.');
            }
        }

        this.readImage = function(callback) {
            if (navigator.clipboard) {
                var promise = navigator.clipboard.read();
                promise
                    .then(function(items) {
                        var promise = getItem(items);
                        if (promise == null) {
                            callback(null, null);
                            return;
                        }
                        promise
                            .then(function(result) {
                                loadFile(result, callback);
                            })
                            .catch(function(error) {
                                callback(null, 'Reading clipboard error.');
                            });
                    })
                    .catch(function(error) {
                        callback(null, 'Reading clipboard error.');
                    });
            } else {
                callback(null, 'Clipboard is not supported.');
            }
        };
    };

    // Usage example:

    var image = document.querySelector('#image');

    function pasteImageBitmap() {
        ClipboardUtils.readImage(function(data, error) {
            if (error) {
                console.log(error);
                return;
            }
            if (data) {
                // image.src = data;

                blob = dataURLtoBlob(data, 'image/png');
                blobUrl = URL.createObjectURL(blob);

                imageEditor.loadImageFromURL(imageEditor.toDataURL(), 'FilterImage').then(function() {
                    imageEditor.addImageObject(blobUrl).then(function(objectProps) {
                        console.log(objectProps);
                    });
                });

                return;
            }
            console.log('Image bitmap is not avaialble - copy it to clipboard.');
        });
    }
</script>


<script type="text/javascript">
    function frame() {



        navigator.clipboard.readText()
            .then(text => {

                var obj = JSON.parse(text);

                if (!obj.copied) {

                    activaTab('imageEditor');
                    console.log(obj.copied);
                    blob = dataURLtoBlob(obj.DataURL, 'image/png');
                    blobUrl = URL.createObjectURL(blob);

                    imageEditor.loadImageFromURL(blobUrl, 'lena').then(result => {
                        console.log('old : ' + result.oldWidth + ', ' + result.oldHeight);
                        console.log('new : ' + result.newWidth + ', ' + result.newHeight);
                    });

                    obj.copied = true;
                    navigator.clipboard.writeText("");


                    // imageEditor.loadImageFromURL(imageEditor.toDataURL(), 'FilterImage').then(function() {
                    //     imageEditor.addImageObject(blobUrl).then(function(objectProps) {
                    //         console.log(objectProps);
                    //     });
                    // });

                }

            }).catch(err => {
                // maybe user didn't grant access to read from clipboard
                console.log('Something went wrong', err);
            });

    };

    function dataURLToBlob1(dataURL) {
        var BASE64_MARKER = ';base64,';

        if (dataURL.indexOf(BASE64_MARKER) == -1) {
            var parts = dataURL.split(',');
            var contentType = parts[0].split(':')[1];
            var raw = decodeURIComponent(parts[1]);

            return new Blob([raw], {
                type: contentType
            });
        }

        var parts = dataURL.split(BASE64_MARKER);
        var contentType = parts[0].split(':')[1];
        var raw = window.atob(parts[1]);
        var rawLength = raw.length;

        var uInt8Array = new Uint8Array(rawLength);

        for (var i = 0; i < rawLength; ++i) {
            uInt8Array[i] = raw.charCodeAt(i);
        }

        return new Blob([uInt8Array], {
            type: contentType
        });
    };

    function activaTab2(tab) {
        var BASE64_MARKER = ';base64,';

        if (dataURL.indexOf(BASE64_MARKER) == -1) {
            var parts = dataURL.split(',');
            var contentType = parts[0].split(':')[1];
            var raw = decodeURIComponent(parts[1]);

            return new Blob([raw], {
                type: contentType
            });
        }

        var parts = dataURL.split(BASE64_MARKER);
        var contentType = parts[0].split(':')[1];
        var raw = window.atob(parts[1]);
        var rawLength = raw.length;

        var uInt8Array = new Uint8Array(rawLength);

        for (var i = 0; i < rawLength; ++i) {
            uInt8Array[i] = raw.charCodeAt(i);
        }

        return new Blob([uInt8Array], {
            type: contentType
        });
    };

    function activaTab(tab) {
        $('.nav-tabs a[href="#' + tab + '"]').tab('show');
    };

    function salvar() {
        console.log(player.getVideoData()['video_id']);

        let varCurrentTime = player.getCurrentTime();

        let objTime = new Date(varCurrentTime * 1000).toISOString().substr(11, 15).replace(/:/g, '-');

        let varNomeTime = player.getVideoData()['video_id'] + objTime;

        $.post("/api/snapshots", {
            nome: varNomeTime,
            dataUrl: imageEditor.toDataURL(),
            videoId: player.getVideoData()['video_id'],
            shotTime: varCurrentTime

        });

        activaTab('player');
    }

    function paste() {

        console.log("fdasdf");

        // const blob = await (await fetch(navigator.clipboard.readText())).blob();

        var jpegFile = "";



        let id = setInterval(frame, 500);





        function clear() {
            if (obj.copied) {

                navigator.clipboard.writeText("");
                clearInterval(id);
            }


        }
    }
</script>
