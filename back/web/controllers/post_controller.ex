defmodule CklNews.PostController do
    use CklNews.Web, :controller
    alias CklNews.Post

    def index(conn, params) do
        # Uncomment this if you want to add a fake delay on the response
        # :timer.sleep(10000)
        
        posts = case params do
            %{"filter" => filter} ->
                Repo.all from p in Post,
                         join: t in assoc(p, :tag),
                         where: t.name == ^filter,
                         preload: [:user, :tag]
            _ ->
                Repo.all from p in Post,
                         preload: [:user, :tag]
        end

        render(conn, "index.json", posts: posts)
    end
end