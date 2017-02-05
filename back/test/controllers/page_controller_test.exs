defmodule CklNews.PageControllerTest do
    use CklNews.ConnCase

    test("if all posts are returned on /api/posts", %{conn: conn}) do
        tech_tag = build(:tag) |> set_tech_tag
        tech_post = insert(:post, tag: tech_tag)
        politics_post = insert(:post)

        conn = get conn, "/api/posts"
        
        assert json_response(conn, 200) == render_json("index.json", posts: [tech_post, politics_post])
    end

    test("if filtered posts are returned on /api/posts/:filter", %{conn: conn}) do
        tech_tag = build(:tag) |> set_tech_tag
        tech_post = insert(:post, tag: tech_tag)
        politics_post = insert(:post)
        
        conn_tech = get conn, "/api/posts/tech"
        conn_politics = get conn, "/api/posts/politics"
        
        assert json_response(conn_tech, 200) == render_json("index.json", posts: [tech_post])
        assert json_response(conn_politics, 200) == render_json("index.json", posts: [politics_post])
    end

    defp render_json(template, assigns) do
        assigns = Map.new(assigns)

        CklNews.PostView.render(template, assigns)
            |> Poison.encode!
            |> Poison.decode!
    end
end
