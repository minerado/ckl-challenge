defmodule CklNews.PostController do
    use CklNews.Web, :controller
    alias CklNews.Post

    def index(conn, _params) do
        posts = Repo.all from p in Post, preload: [:user, :tag]

        render(conn, "index.json", posts: posts)
    end
end