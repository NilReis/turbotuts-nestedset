@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
    {{-- <h1><i class="{{$menu->icon}}"></i> {{$menu->text}}</h1> --}}
    <style>
        /* Dark navy
    .skin-blue .main-header .navbar {
        background-color: #002244;
    }*/
        /* Darkest navy
    .skin-blue .main-header .logo {
        background-color: #00182F;
    }*/
        /* Grey used in AFP dropdowns
    .skin-blue .wrapper, .skin-blue .main-sidebar, .skin-blue .left-side {
        background-color: #37424A;
    }*/
        /* light blue
    .bg-purple {
        background-color: #44697d !important;
    }
    .skin-blue .sidebar-menu > li.active > a {
        border-left-color: #44697d;
    }
    .skin-blue .main-header .logo:hover {
        background-color: #44697d;
    }
    .skin-blue .main-header .navbar .sidebar-toggle:hover {
        background-color: #44697d;
    }
    .btn-app > .fa, .btn-app > .glyphicon, .btn-app > .ion {
        color: #44697d;
    }*/
        body {
            font-family: Source Sans Pro, Helvetica Neue, Helvetica, Arial, sans-serif;
            font-weight: 400;
        }

        #one {
            background: white;
        }

        #two {
            padding-top: 20px;
            background: #f2f2f2;
        }

        .bg-grey {
            background: #f2f2f2;
            border-left: 1px solid #ccc;
            height: 100vh;
        }

        #two ul.timeline {
            overflow: scroll;
            height: 100vh;
            padding-top: 15px;
        }

        /* split js */
        .gutter {
            background-color: #555;
            background-repeat: no-repeat;
            background-position: 50%;
        }

        .gutter.gutter-horizontal {
            cursor: ew-resize;
            float: left;
            height: 100%;
            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==');
        }

        .split {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }

        .split {
            overflow-y: auto;
            overflow-x: auto;
            height: 100vh;
        }

        /* Draggable items */
        .timeline-item {
            cursor: move;
        }

        .drop-zone {
            padding: 1em;
            margin: .5em;
            border: 2px dashed #ccc;
            border-radius: 4px;
        }

        /* collapsible overrides */
        .panel-title>.small,
        .panel-title>.small>a,
        .panel-title>a,
        .panel-title>small,
        .panel-title>small>a {
            display: block;
            font-size: 0.9em;
            padding: 10px 15px;
        }

        .panel-heading {
            /*padding:0;*/
        }

        .panel-title a:after {
            font-family: 'fontawesome';
            float: right;
        }

        .panel-title a[aria-expanded=true]:after {
            content: "\f106";
        }

        .panel-title a[aria-expanded=false]:after {
            content: "\f107";
        }

        /* nested panels */
        .box-body .panel-group .panel {
            border-radius: 0;
            margin: -1px .5em 0;
        }

        .panel-group {
            margin: 1em 0;
        }

        .panel-group .panel-group {
            margin: .5em 0;
        }

        .panel .list-unstyled li {
            margin: 0 0.5em;
            padding: 0.5em 0;
            border-bottom: 1px solid #ccc;
        }

        .panel .list-unstyled li:last-child {
            border: none;
        }

        .panel .list-unstyled li a {
            padding: .5em;
        }

        .panel .list-unstyled li:hover {
            cursor: move;
        }

        .box-header {
            cursor: pointer;
        }

        .list-unstyled .pull-right.fa {
            margin-left: 0.3em;
            padding: .9em 0.1em;
            cursor: pointer;
        }

        /* Comments */
        .comments :first-of-type.comment {
            border-top: 1px solid #eee;
            margin-top: 10px;
        }

        .comment {
            padding: 8px 0;
            border-bottom: 1px solid #eee;
        }

        .box-comments .box-comment img,
        .img-sm,
        .user-block-sm.user-block img {
            width: 30px !important;
            height: 30px !important;
        }

        .comments .comment-text {
            margin-left: 40px;
            color: #555;
        }

        .comments .username {
            color: #444;
            display: block;
            font-weight: 600;
        }

        .comments .text-muted {
            font-weight: 400;
            font-size: 12px;
        }

        .comments :last-of-type.comment {
            border-bottom: 0;
        }

        .person-hidden {
            display: none;
        }

    </style>
@stop

@section('content')

    {{-- <div class="container-fluid">
        <div class="row">
            <div class="col-md-6">
                <div id="treecontainer">

                </div>
            </div>
            <div class="col-md-6">
                <pre name="code" id="editor" style="border: none;"></pre>
            </div>
        </div>
    </div> --}}


    <div class="wrapper">
        <section class="container">
            <!-- Small boxes (Stat box) -->
            <div class="row" style="height:100vh">

                <div id="one" class="col-md-4 split">
                    <h2>
                        Views
                    </h2>
                    <p>System generated views</p>
                    <div class="position-fixed">
                        <!--<a class="btn btn-sm btn-success" id="addRootNode" style="margin-bottom: 10px;" href="#/"><span class="fa fa-plus" style="margin-right: 10px;"></span>Add category</a>
          -->
                        <div id="html" class="demo">

                        </div>

                    </div>


                </div>
                <div id="two" class="col-md-8 split">
                    <p class="no-selection text-muted">Select an entity to continue</p>
                    <div class="container-fluid person-hidden" data-ims="person-summary-detail">
                        <div class="row">
                            <div class="col-md-7">
                                <div class="box box-danger ">
                                    <div class="box-header with-border">
                                        <h3 class="box-title"><i class="fa fa-fw fa-user"></i> Jane Citizen</h3>
                                        <div class="box-tools pull-right"><button class="btn btn-box-tool" type="button"
                                                data-widget="collapse"><i class="fa fa-minus"></i></button></div>
                                    </div>
                                    <div class="box-body box-profile">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <img class="profile-user-img img-responsive img-circle"
                                                    alt="User profile picture" src="dist/img/user4-128x128.jpg">
                                            </div>
                                            <div class="col-md-9 text-left">
                                                <dl class="dl-horizontal dl-form">
                                                    <dt class="dl-form-label">Name:</dt>
                                                    <dd class="dl-form-value">Jane Citizen</dd>
                                                    <dt class="dl-form-label">Type:</dt>
                                                    <dd class="dl-form-value">POI</dd>
                                                    <dt class="dl-form-label">Gender:</dt>
                                                    <dd class="dl-form-value">Female</dd>
                                                    <dt class="dl-form-label">DOB:</dt>
                                                    <dd class="dl-form-value">21/03/1980</dd>
                                                    <dt class="dl-form-label">Age:</dt>
                                                    <dd class="dl-form-value">27</dd>
                                                    <dt class="dl-form-label">Nationality:</dt>
                                                    <dd class="dl-form-value">Australian</dd>
                                                </dl>
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="alert alert-danger alert-dismissible">
                                                    <button class="close" aria-hidden="true" type="button"
                                                        data-dismiss="alert">×</button>
                                                    <h4><i class="icon fa fa-ban"></i> Alert!</h4> Danger alert preview.
                                                    This alert is dismissable.
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="box-footer clearfix">
                                        <div><span><i class="fa fa-comments-o"></i><!-- react-text: 1021 --> Comments (
                                                <!-- /react-text -->
                                                <!-- react-text: 1022 -->2
                                                <!-- /react-text -->
                                                <!-- react-text: 1023 -->)
                                                <!-- /react-text -->
                                            </span>
                                            <div class="clearfix"></div>
                                            <div class="comments">
                                                <div class="comment"><img class="img-circle img-sm pull-left" alt=""
                                                        src="dist/img/user.png">
                                                    <div class="comment-text"><span class="username">
                                                            <!-- react-text: 1037 -->Name Surname
                                                            <!-- /react-text --><span
                                                                class="text-muted pull-right">09-08-2017 10:19 am</span>
                                                        </span>
                                                        <!-- react-text: 1039 -->Discussion point about the investigation
                                                        <!-- /react-text -->
                                                    </div>
                                                </div>
                                                <div class="comment"><img class="img-circle img-sm pull-left" alt=""
                                                        src="dist/img/user.png">
                                                    <div class="comment-text"><span class="username">
                                                            <!-- react-text: 1057 -->Name Surname
                                                            <!-- /react-text --><span
                                                                class="text-muted pull-right">09-08-2017 10:19 am</span>
                                                        </span>
                                                        <!-- react-text: 1059 -->That's a good point.
                                                        <!-- /react-text -->
                                                    </div>
                                                </div>
                                                <div class="comment"><img class="img-responsive img-circle img-sm"
                                                        src="dist/img/user.png">
                                                    <div class="img-push input-group"><input class="form-control"
                                                            type="text" placeholder="Your comment..." value=""><span
                                                            class="input-group-btn"><button class="btn btn-default"
                                                                type="button" data-ims="add-comment">Add</button></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="box box-danger">
                                    <div class="box-header with-border">
                                        <h3 class="box-title"><i class="fa fa-fw fa-map-marker"></i> Location list</h3>
                                        <div class="box-tools pull-right"><button class="btn btn-box-tool" type="button"
                                                data-widget="collapse"><i class="fa fa-minus"></i></button></div>
                                    </div>
                                    <div class="box-body">
                                        <span class="text-muted">There are no locations associated with Jane
                                            Citizen</span>
                                    </div>
                                </div>
                                <div class="box box-danger">
                                    <div class="box-header with-border">
                                        <h3 class="box-title"><i class="fa fa-check-square-o fa-fw"></i> Task list</h3>
                                        <div class="box-tools pull-right"><button class="btn btn-box-tool" type="button"
                                                data-widget="collapse"><i class="fa fa-minus"></i></button></div>
                                    </div>
                                    <div class="box-body">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody data-ims="task-tagged-table">
                                                <tr>
                                                    <td><a href="#/" data-toggle="modal"
                                                            data-target="#modal-default">TSK-D491 : Submit Centrelink
                                                            Request</a></td>
                                                    <td class="pull-right table-td-button">
                                                        <!-- react-empty: 1805 --><button
                                                            class="btn btn-default btn-xs pull-right"><i
                                                                class="fa fa-trash fa-fw" aria-hidden="true"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><a
                                                            href="#/investigation/5e1c821b-fad0-4bff-b7f2-5963d35c1cb4/taskList/68e64dd3-ff38-4fc0-8038-613177f3016b">TSK-68E6
                                                            : Submit ACTEW/AGL utilities check</a></td>
                                                    <td class="pull-right table-td-button">
                                                        <!-- react-empty: 1814 --><button
                                                            class="btn btn-default btn-xs pull-right"><i
                                                                class="fa fa-trash fa-fw" aria-hidden="true"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><a
                                                            href="#/investigation/5e1c821b-fad0-4bff-b7f2-5963d35c1cb4/taskList/50c54b79-2e26-40e9-a00c-0c87948a7ab1">TSK-50C5
                                                            : Submit ACT Licence request</a></td>
                                                    <td class="pull-right table-td-button">
                                                        <!-- react-empty: 1823 --><button
                                                            class="btn btn-default btn-xs pull-right"><i
                                                                class="fa fa-trash fa-fw" aria-hidden="true"></i></button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-5">

                                <div>
                                    <div class="row">
                                        <div class="col-sm-12 tagged-panel">
                                            <div class="panel panel-default">
                                                <div class="panel-heading">
                                                    <i class="fa fa-users fa-fw"></i>
                                                    <!-- react-text: 1697 -->
                                                    <!-- /react-text -->
                                                    <!-- react-text: 1698 -->Tagged Persons of Interest
                                                    <!-- /react-text -->
                                                    <div class="pull-right"><a class="btn btn-sm"
                                                            style="margin:-3px -7px 0 0" href="#/"><span
                                                                class="fa fa-plus"
                                                                style="margin-right: 10px;"></span>Add</a></div>
                                                </div>
                                                <div class="panel-body">
                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Tag Relationship Type</th>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody data-ims="poi-tagged-table">
                                                            <tr>
                                                                <td>Name Surname</td>
                                                                <td>Association</td>
                                                                <td class="pull-right table-td-button">
                                                                    <!-- react-empty: 1712 --><button
                                                                        class="btn btn-default btn-xs pull-right"><i
                                                                            aria-hidden="true"
                                                                            class="fa fa-trash fa-fw"></i></button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Name Surname</td>
                                                                <td>Subject</td>
                                                                <td class="pull-right table-td-button">
                                                                    <!-- react-empty: 1721 --><button
                                                                        class="btn btn-default btn-xs pull-right"><i
                                                                            aria-hidden="true"
                                                                            class="fa fa-trash fa-fw"></i></button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-sm-12 tagged-panel">
                                            <div class="panel panel-default">
                                                <div class="panel-heading">
                                                    <i class="fa fa-sticky-note-o fa-fw"></i>
                                                    <!-- react-text: 1729 -->
                                                    <!-- /react-text -->
                                                    <!-- react-text: 1730 -->Tagged Notes
                                                    <!-- /react-text -->
                                                    <div class="pull-right"><a class="btn btn-sm"
                                                            style="margin:-3px -7px 0 0" href="#/"><span
                                                                class="fa fa-plus"
                                                                style="margin-right: 10px;"></span>Add</a></div>
                                                </div>
                                                <div class="panel-body">
                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody data-ims="notes-tagged-table">
                                                            <tr>
                                                                <td>
                                                                    <a href="#/">NOT-48F3 : NPRS Check - No further
                                                                        information</a>
                                                                </td>
                                                                <td class="pull-right table-td-button">
                                                                    <!-- react-empty: 1743 --><button
                                                                        class="btn btn-default btn-xs pull-right"><i
                                                                            aria-hidden="true"
                                                                            class="fa fa-trash fa-fw"></i></button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <a href="#/">NOT-92A2 : Travel to Canberra for training
                                                                        23 - 25/7</a>
                                                                </td>
                                                                <td class="pull-right table-td-button">
                                                                    <!-- react-empty: 1752 --><button
                                                                        class="btn btn-default btn-xs pull-right"><i
                                                                            aria-hidden="true"
                                                                            class="fa fa-trash fa-fw"></i></button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12 tagged-panel">
                                            <div class="panel panel-default">
                                                <div class="panel-heading">
                                                    <i class="fa fa-file-text fa-fw"></i>
                                                    <!-- react-text: 1760 -->
                                                    <!-- /react-text -->
                                                    <!-- react-text: 1761 -->Tagged Files
                                                    <!-- /react-text -->
                                                    <div class="pull-right"><a class="btn btn-sm"
                                                            style="margin:-3px -7px 0 0" href="#/"><span
                                                                class="fa fa-plus"
                                                                style="margin-right: 10px;"></span>Add</a></div>
                                                </div>
                                                <div class="panel-body">
                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody data-ims="file-tagged-table">
                                                            <tr>
                                                                <td>
                                                                    <a
                                                                        href="#/investigation/5e1c821b-fad0-4bff-b7f2-5963d35c1cb4/fileList/b6892a0b-b607-4c49-9f4a-0f44c76a8f86">FLE-B689
                                                                        : Intelligence Report.docx</a>
                                                                </td>
                                                                <td class="pull-right table-td-button">
                                                                    <!-- react-empty: 1774 --><button
                                                                        class="btn btn-default btn-xs pull-right"><i
                                                                            aria-hidden="true"
                                                                            class="fa fa-trash fa-fw"></i></button>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <a
                                                                        href="#/investigation/5e1c821b-fad0-4bff-b7f2-5963d35c1cb4/fileList/a5d28d06-70d1-4676-978d-28200489be2f">FLE-A5D2
                                                                        : ACT Road Transport Authority Licence
                                                                        Request.pdf</a>
                                                                </td>
                                                                <td class="pull-right table-td-button">
                                                                    <!-- react-empty: 1783 --><button
                                                                        class="btn btn-default btn-xs pull-right"><i
                                                                            aria-hidden="true"
                                                                            class="fa fa-trash fa-fw"></i></button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12 tagged-panel">
                                            <div class="panel panel-default">
                                                <div class="panel-heading">
                                                    <i class="fa fa-dot-circle-o fa-fw"></i>
                                                    <!-- react-text: 1831 -->
                                                    <!-- /react-text -->
                                                    <!-- react-text: 1832 -->Tagged Offences
                                                    <!-- /react-text -->
                                                    <div class="pull-right"><a class="btn btn-sm"
                                                            style="margin:-3px -7px 0 0" href="#/"><span
                                                                class="fa fa-plus"
                                                                style="margin-right: 10px;"></span>Add</a></div>
                                                </div>
                                                <div class="panel-body">
                                                    <table class="table">
                                                        <tbody data-ims="offence-tagged-table">
                                                            <tr>
                                                                <td>
                                                                    <div class="offence-section-title">
                                                                        <i aria-hidden="true"
                                                                            class="fa fa-plus fa-fw offence-expand-icon pointer"></i><span
                                                                            class="offence-title">103.2 Criminal Code
                                                                            (C'WEALTH) 1995: Financing a terrorist</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <!-- react-empty: 1843 --><a
                                                                        class="btn btn-default btn-xs pull-right"><i
                                                                            aria-hidden="true"
                                                                            class="fa fa-trash fa-fw"></i></a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- 		<div class="box box-info">
                                      <div class="box-header with-border">
                                          <h3 class="box-title"><i class="fa fa-fw fa-dot-circle-o"></i> Offence list</h3><div class="box-tools pull-right"><button class="btn btn-box-tool" type="button" data-widget="collapse"><i class="fa fa-minus"></i></button></div>
                                      </div>
                                      <div class="box-body">
                                          <span class="text-muted">There are no offences associated with Jane Citizen</span>
                                      </div>
                                  </div>
                                  <div class="box box-info">
                                      <div class="box-header with-border">
                                          <h3 class="box-title"><i class="fa fa-fw fa-calendar-o"></i> Events list</h3><div class="box-tools pull-right"><button class="btn btn-box-tool" type="button" data-widget="collapse"><i class="fa fa-minus"></i></button></div>
                                      </div>
                                      <div class="box-body">
                                          <span class="text-muted">There are no events associated with Jane Citizen</span>
                                      </div>
                                  </div>
                                  <div class="box box-info">
                                      <div class="box-header with-border">
                                          <h3 class="box-title"><i class="fa fa-fw fa-user"></i> Linked entities</h3><div class="box-tools pull-right"><button class="btn btn-box-tool" type="button" data-widget="collapse"><i class="fa fa-minus"></i></button></div>
                                      </div>
                                      <div class="box-body">
                                          <table class="table"><thead><tr><th>Name</th><th>Tag Relationship Type</th><th></th></tr></thead><tbody data-ims="poi-tagged-table"><tr><td>Ayad al-Jumaili </td><td>Association</td><td class="pull-right table-td-button"><button class="btn btn-default btn-xs pull-right"><i class="fa fa-trash fa-fw" aria-hidden="true"></i></button></td></tr><tr><td>Jo De Stefano</td><td>Subject</td><td class="pull-right table-td-button"><button class="btn btn-default btn-xs pull-right"><i class="fa fa-trash fa-fw" aria-hidden="true"></i></button></td></tr></tbody></table>
                                      </div>
                                  </div>
                                  <div class="box box-info">
                                      <div class="box-header with-border">
                                          <h3 class="box-title"><i class="fa fa-fw fa-sticky-note-o"></i> Note list</h3><div class="box-tools pull-right"><button class="btn btn-box-tool" type="button" data-widget="collapse"><i class="fa fa-minus"></i></button></div>
                                      </div>
                                      <div class="box-body">
                                      <table class="table"><thead><tr><th>Name</th><th></th></tr></thead><tbody data-ims="notes-tagged-table"><tr><td><a href="#/">NOT-48F3  : NPRS Check - No further information</a></td><td class="pull-right table-td-button"><button class="btn btn-default btn-xs pull-right"><i class="fa fa-trash fa-fw" aria-hidden="true"></i></button></td></tr><tr><td><a href="#/">NOT-92A2  : Travel to Canberra for training 23 - 25/7</a></td><td class="pull-right table-td-button"><button class="btn btn-default btn-xs pull-right"><i class="fa fa-trash fa-fw" aria-hidden="true"></i></button></td></tr></tbody></table>
                                      </div>
                                  </div>
                                  <div class="box box-info">
                                      <div class="box-header with-border">
                                          <h3 class="box-title"><i class="fa fa-fw fa-file-text-o"></i> File list</h3><div class="box-tools pull-right"><button class="btn btn-box-tool" type="button" data-widget="collapse"><i class="fa fa-minus"></i></button></div>
                                      </div>
                                      <div class="box-body">
                                          <table class="table"><thead><tr><th>Name</th><th></th></tr></thead><tbody data-ims="file-tagged-table"><tr><td><a href="#/investigation/5e1c821b-fad0-4bff-b7f2-5963d35c1cb4/fileList/b6892a0b-b607-4c49-9f4a-0f44c76a8f86">FLE-B689  : Intelligence Report.docx</a></td><td class="pull-right table-td-button"><button class="btn btn-default btn-xs pull-right"><i class="fa fa-trash fa-fw" aria-hidden="true"></i></button></td></tr><tr><td><a href="#/investigation/5e1c821b-fad0-4bff-b7f2-5963d35c1cb4/fileList/a5d28d06-70d1-4676-978d-28200489be2f">FLE-A5D2  : ACT Road Transport Authority Licence Request.pdf</a></td><td class="pull-right table-td-button"><button class="btn btn-default btn-xs pull-right"><i class="fa fa-trash fa-fw" aria-hidden="true"></i></button></td></tr></tbody></table>
                                      </div>
                                  </div>
                                  <div class="box box-info ">
                                      <div class="box-header with-border">
                                          <h3 class="box-title">Related info</h3><div class="box-tools pull-right"><button class="btn btn-box-tool" type="button" data-widget="collapse"><i class="fa fa-minus"></i></button></div>
                                      </div>
                                      <div class="box-body">
                                          <span class="text-muted">Social media feeds, other investigations or related cases will show here.</span>
                                      </div>
                                  </div>
                              </div> -->

                            </div>
                        </div>
                    </div>
                </div>

        </section>
    </div>


    <div class="modal fade" id="modal-default">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Task Details : TSK-E220 <span class="label label-info">
                            Under Review
                        </span></h4>
                </div>
                <div class="modal-body">
                    <div class="pull-right">
                        <div class="btn-group"><button class="btn btn-sm dropdown-toggle btn-default"
                                aria-expanded="false" aria-haspopup="true" type="button" data-toggle="dropdown">
                                <!-- react-text: 8651 -->Actions
                                <!-- /react-text -->
                                <!-- react-text: 8652 -->
                                <!-- /react-text --><span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-right">
                                <li><a href="#" data-action="10"><i class="fa fa-mail-forward"></i>
                                        <!-- react-text: 8658 -->
                                        <!-- /react-text -->
                                        <!-- react-text: 8659 -->Assign
                                        <!-- /react-text -->
                                    </a></li>
                            </ul>
                        </div>
                    </div>
                    <h4>TI Subscriber check for Suspect</h4>
                    <dl class="dl-horizontal">
                        <dt>Description</dt>
                        <dd style="white-space: pre-line;">
                            <div>
                                <p>Submit basic subscriber check for Name</p>
                            </div>
                        </dd>
                        <dt>Type</dt>
                        <dd>Investigative</dd>
                        <dt>Sub-Type</dt>
                        <dd>TI Subscriber</dd>
                    </dl>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Go to task</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->




@stop

@section('css')
    {{-- <link rel="stylesheet" href="/css/admin_custom.css"> --}}
@stop

@section('js')
    <script>
        console.log('Hi!');
    </script>

    {{-- <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script> --}}

    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/jstree/3.3.8/themes/default/style.min.css" />
    <script src="//cdnjs.cloudflare.com/ajax/libs/jstree/3.3.8/jstree.min.js"></script>

    <script>
        $(window).on('load', function() {
            console.log('Document is loaded');
        });

        console.log('DOM is ready');

        var structure = [
            'Simple root node',
            {
                'text': 'Root node 2',
                'state': {
                    'opened': true,
                    'selected': true
                },
                'children': [{
                        'text': 'Child 1',
                        'type': 'type1'
                    },
                    {
                        'text': 'Child 2',
                        'type': 'type2'
                    },
                    {
                        'text': 'Child 3',
                        'type': 'type3'
                    },
                    {
                        'text': 'Child 4a',
                        'type': 'type4'
                    },
                    {
                        'text': 'Child 4b',
                        'type': 'type4'
                    },
                ]
            }
        ];


        var tree = $('#html')
            .on('changed.jstree', function(e, data) {
                //console.log('changed');
                // refresh_json();
            })
            .on('move_node.jstree', function(e, data) {
                //console.log('moved');
                // refresh_json();
            })
            .jstree({
                "core": {
                    "check_callback": true,
                    'data': {
                        "url": "/api/categoryjson/show",
                        "dataType": "json"
                    }
                },
                "types": {
                    "#": {
                        "icon": "glyphicon glyphicon-apple"
                    },
                    "default": {
                        "icon": "glyphicon glyphicon-star"
                    },
                    "type1": {
                        "icon": "glyphicon glyphicon-leaf",
                        valid_children: ["type2", "type3"]
                    },
                    "type2": {
                        "icon": "glyphicon glyphicon-heart-empty"
                    },
                    "type3": {
                        "icon": "glyphicon glyphicon-flash"
                    },
                    "type4": {
                        "icon": "glyphicon glyphicon-tower"
                    }
                },
                "plugins": ["contextmenu", "dnd"]
            })
            .on('delete_node.jstree', function(e, data) {
                $.post('/api/categoryjson/operation', {
                        'operation': 'delete_node',
                        'id': data.node.id
                    })
                    .fail(function() {
                        data.instance.refresh();
                    });
            })
            .on('create_node.jstree', function(e, data) {
                $.post('/api/categoryjson/operation', {
                        'operation': 'create_node',
                        'id': data.node.parent,
                        'position': data.position,
                        'text': data.node.text,
                        'parent': data.parent
                    })
                    .done(function(d) {
                        data.instance.set_id(data.node, d.id);
                    })
                    .fail(function() {
                        data.instance.refresh();
                    });
            })
            .on('rename_node.jstree', function(e, data) {
                $.post('/api/categoryjson/operation', {
                        'operation': 'rename_node',
                        'id': data.node.id,
                        'text': data.text
                    })
                    .fail(function() {
                        // data.instance.refresh();
                    });
            })
            .on('move_node.jstree', function(e, data) {
                $.post('/api/categoryjson/operation', {
                        'operation': 'move_node',
                        'id': data.node.id,
                        'parent': data.parent,
                        'position': data.position,
                        'old_parent': data.old_parent
                    })
                    .fail(function() {
                        data.instance.refresh();
                    });
            })
            .on('copy_node.jstree', function(e, data) {
                $.post('/api/categoryjson/operation', {
                        'operation': 'copy_node',
                        'id': data.original.id,
                        'parent': data.parent,
                        'position': data.position
                    })
                    .always(function() {
                        data.instance.refresh();
                    });
            })
            .on('changed.jstree', function(e, data) {
                if (data && data.selected && data.selected.length) {
                    $.get('?operation=get_content&id=' + data.selected.join(':'), function(d) {
                        $('#data .default').text(d.content).show();
                    });
                } else {
                    $('#data .content').hide();
                    $('#data .default').text('Select a file from the tree.').show();
                }
            });



        // refresh_json();

        function refresh_json() {
            var v = $("#treecontainer").jstree(true).get_json('#', {}, false);
            var jsonstring = JSON.stringify(v, null, '\t');
            //$("#jsonstring").html("<h1>JSON string</h1><code>" + jsonstring + "</code>");
        }
    </script>


@stop
