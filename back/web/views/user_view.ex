defmodule CklNews.UserView do
    use CklNews.Web, :view

    def user_json(user) do
        %{
            name: user.name,
            image: user.image,
        }
    end
end
