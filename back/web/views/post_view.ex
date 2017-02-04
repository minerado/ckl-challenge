defmodule CklNews.PostView do
    use CklNews.Web, :view


    def render("index.json", %{posts: posts}) do
        %{
            posts: Enum.map(posts, &post_json/1)
        }
    end

    def post_json(post) do
        %{
            title: post.title,
            text: post.text,
            image: post.image,
            tag: CklNews.TagView.tag_json(post.tag),
            user: CklNews.UserView.user_json(post.user),
        }
    end
end