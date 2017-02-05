defmodule CklNews.Factory do
    use ExMachina.Ecto, repo: CklNews.Repo

    def user_factory do
        %CklNews.User{
            name: "user_name",
            image: "user_image",
        }
    end

    def tag_factory do
        %CklNews.Tag{
            name: "politics",
            color: "red",
        }
    end

    def set_tech_tag(tag) do
        %{ tag | name: "tech", color: "green" }
    end

    def post_factory do
        %CklNews.Post{
            title: "teste",
            text: "teste",
            image: "teste",
            tag: build(:tag),
            user: build(:user),
        }
    end
end
