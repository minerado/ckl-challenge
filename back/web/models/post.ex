defmodule CklNews.Post do
    use CklNews.Web, :model

    schema "posts" do
        field :title, :string
        field :text, :string
        field :image, :string
        
        belongs_to :user, CklNews.User
        belongs_to :tag, CklNews.Tag

        timestamps()
    end

    def changeset(struct, params \\ %{}) do
        struct
            |> cast(params, [:name, :image])
            |> validate_required([:name, :image])
    end
end
