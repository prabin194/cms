<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Tag;
use Ramsey\Uuid\Uuid;

class TagController extends Controller
{
       /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tags = Tag::latest()->paginate(10);

        return Inertia::render('Tag/Index', [
            'status' => session('status'),
            'tags' => $tags,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Tag/Create', [
            'status' => session('status'),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
        ]);

        $tag = Tag::create([
            'uid' => Uuid::uuid4()->toString(),
            'name' => $request->name,
            'description' => $request->description,
            'user_id' => auth()->user()->uid,
        ]);

        return redirect(route('tag.index', absolute: false));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $tag = Tag::where('uid', $id)->first();

        return Inertia::render('Tag/Edit', [
            'tag' => $tag,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $tag = Tag::where('uid', $id)->first();

        $tag->update([
            'name' => $request->name,
            'description' => $request->description,
        ]);

        return redirect()->route('tag.index')->with('success', 'tag updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $tag = Tag::where('uid', $id)->first();

        if ($tag) {
            $tag->delete();
        }

        return redirect()->route('tag.index')->with('success', 'tag deleted successfully!');
    }
}
