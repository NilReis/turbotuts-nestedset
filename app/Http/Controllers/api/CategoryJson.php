<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryJson extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            /* Database connection start */
            $servername = "localhost";
            $username = "root";
            $password = "";
            $dbname = "laravel-adminlte-dynamic_menu";
            $conn = mysqli_connect($servername, $username, $password, $dbname) or die("Connection failed: " . mysqli_connect_error());

            if (mysqli_connect_errno()) {
                printf("Connect failed: %s\n", mysqli_connect_error());
                exit();
            }


            $sql = "SELECT * FROM `categories`";
            $res = mysqli_query($conn, $sql) or die("database error:" . mysqli_error($conn));
            //iterate on results row and create new index array of data
            while ($row = mysqli_fetch_assoc($res)) {
                $data[] = $row;
            }
            $itemsByReference = array();

            // Build array of item references:
            foreach ($data as $key => &$item) {
                $itemsByReference[$item['id']] = &$item;
                // Children array:
                // $itemsByReference[$item['id']]['submenu'] = array();
                // Empty data class (so that json_encode adds "data: {}" )
                // $itemsByReference[$item['id']]['data'] = [];
            }

            // Set items as children of the relevant parent item.
            foreach ($data as $key => &$item)
                if ($item['parent_id'] && isset($itemsByReference[$item['parent_id']]))
                    $itemsByReference[$item['parent_id']]['children'][] = &$item;

            // Remove items that were added to parents elsewhere:
            foreach ($data as $key => &$item) {
                if ($item['parent_id'] && isset($itemsByReference[$item['parent_id']]))
                    unset($data[$key]);
            }

            return $data;
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        //

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        // return Category::where('id', $id)->with('playlists')->get();

        $category = Category::find($id);

        if ($category) {
            return $category->playlist;
        } else {
            return response()->json(['message' => 'Category not found'], 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        return true;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }


    public function operation(Request $request)
    {


        try {

            if ($request->operation == 'move_node') {
                $category = Category::find($request->id);
                $category->parent_id = $request->parent;
                $category->save();

                // dd($request);
            }

            if ($request->operation == 'create_node') {
                $category = new Category();
                $category->text = $request->text;
                $category->parent_id = $request->parent;
                $category->icon = '';
                $category->url = '';
                $category->position =  $request->position;
                $category->save();
            }

            if ($request->operation == 'rename_node') {
                $category = Category::find($request->id);
                $category->text = $request->text;
                $category->save();
            }
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
