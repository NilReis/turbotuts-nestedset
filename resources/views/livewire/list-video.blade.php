@foreach ($playlists1 as $item)
@php
    $count++;
@endphp

<div class="card">
    <div class="card-header" id="heading-{{ $item->id }}">
        <h5 class="mb-0"> <a role="button" data-toggle="collapse" href="#collapse-{{ $item->id }}"
                aria-expanded="true" aria-controls="collapse-1">
                {{ $item->title }} 1 </a>
        </h5>
    </div>
    <div id="collapse-{{ $item->id }}" class="collapse" data-parent="#accordion"
        aria-labelledby="heading-{{ $item->id }}">
        <div class="card-body">
            <div class="col-md-2">
                <img src=" {{ $item->thumbnail }} " class="card-img" alt="...">
            </div>
            @if ($item->video_count > 0)
                <a class="btn btn-success" href="/playlist/{{ $item->id }} " role="button">Ver</a>
            @else
                <a class="btn btn-primary" role="button"
                    wire:click="AddItens({{ $item->id }})">Adicionar Videos</a>
            @endif
            <a class="btn btn-primary" role="button"
                wire:click="remove({{ $item->id }})">Deletar</a>
            <button type="button" class="btn btn-primary">
                Videos
                <span class="badge badge-light"> {{ $item->video_count }} </span>
            </button>
            <button type="button" class="btn btn-primary">
                Github
            </button>
            <!-- <button type="button" class="btn btn-primary" onclick="ShowList({{ $item->id }})">
                Show List
            </button> -->
            <div id="accordion-{{ $item->id }}">
                <div class="card">

                    <div class="card-header" id="heading-{{ $item->id }}-1">

                        <h5 class="mb-0"> <a class="collapsed" role="button" data-toggle="collapse"
                                href="#collapse-{{ $item->id }}-1" aria-expanded="false"
                                aria-controls="collapse-{{ $item->id }}-1">
                                Videos 1 > 1 </a> </h5>
                    </div>
                    <div id="collapse-{{ $item->id }}-1" class="collapse"
                        data-parent="#accordion-{{ $item->id }}"
                        aria-labelledby="heading-{{ $item->id }}-1">
                        <div class="card-body">

                            tste

                        </div>
                    </div>
                </div>
                {{-- <div class="card">
                    <div class="card-header" id="heading-{{ $item->id }}-2">
                        <h5 class="mb-0"> <a class="collapsed" role="button" data-toggle="collapse"
                                href="#collapse-{{ $item->id }}-2" aria-expanded="false"
                                aria-controls="collapse-{{ $item->id }}-2">
                                Item 1 > 2 </a> </h5>
                    </div>
                    <div id="collapse-{{ $item->id }}-2" class="collapse"
                        data-parent="#accordion-{{ $item->id }}"
                        aria-labelledby="heading-{{ $item->id }}-2">
                        <div class="card-body">
                            Text 1 > 2
                        </div>
                    </div>
                </div> --}}
            </div>
        </div>
    </div>
</div>
<!-- /.panel -->
@endforeach
