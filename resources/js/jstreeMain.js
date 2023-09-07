$(function () {
    $(window).resize(function () {
        var h = Math.max($(window).height() - 0, 420);
        $('#container, #data, #tree, #data .content').height(h).filter('.default').css('lineHeight', h + 'px');
    }).resize();

    $('#tree')
        .jstree({
            'core': {
                'data': {
                    'url': 'Util/TreeviewJson.php?operation=get_node',
                    'data': function (node) {
                        return {'id': node.id};
                    }
                },
                'check_callback': true,
                'themes': {
                    'responsive': false
                }
            },
            'force_text': true,
            'plugins': ['state', 'dnd', 'contextmenu', 'wholerow']
        })
        .on('delete_node.jstree', function (e, data) {
            $.get('Util/TreeviewJson.php?operation=delete_node', {'id': data.node.id})
                .fail(function () {
                    data.instance.refresh();
                });
        })
        .on('create_node.jstree', function (e, data) {
            $.get('Util/TreeviewJson.php?operation=create_node', {
                'id': data.node.parent,
                'position': data.position,
                'text': data.node.text
            })
                .done(function (d) {
                    data.instance.set_id(data.node, d.id);
                })
                .fail(function () {
                    data.instance.refresh();
                });
        })
        .on('rename_node.jstree', function (e, data) {
            $.get('Util/TreeviewJson.php?operation=rename_node', {'id': data.node.id, 'text': data.text})
                .fail(function () {
                    data.instance.refresh();
                });
        })
        .on('move_node.jstree', function (e, data) {
            $.get('Util/TreeviewJson.php?operation=move_node', {
                'id': data.node.id,
                'parent': data.parent,
                'position': data.position
            })
                .fail(function () {
                    data.instance.refresh();
                });
        })
        .on('copy_node.jstree', function (e, data) {
            $.get('Util/TreeviewJson.php?operation=copy_node', {
                'id': data.original.id,
                'parent': data.parent,
                'position': data.position
            })
                .always(function () {
                    data.instance.refresh();
                });
        })
        .on('changed.jstree', function (e, data) {
            if (data && data.selected && data.selected.length) {
                $.get('Util/TreeviewJson.php?operation=get_content&id=' + data.selected.join(':'), function (d) {

                    // $('#data .default').text(d.content).show();
                    $('#data').html(d.content);
                });
            } else {
                // $('#data .content').hide();
                // $('#data .default').text('Select a file from the tree.').show();
            }
        });

});

function customMenu(node) {
    // The default set of all items
    var items = {
        renameItem: { // The "rename" menu item
            label: "Rename",
            action: function () {
            }
        },
        deleteItem: { // The "delete" menu item
            label: "Delete",
            action: function () {
            }
        }
    };

    if ($(node).hasClass("folder")) {
        // Delete the "delete" menu item
        delete items.deleteItem;
    }

    return items;
}

