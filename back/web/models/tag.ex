defmodule CklNews.Tag do
    use CklNews.Web, :model

    schema "tags" do
        field :name, :string
        field :color, :string

        has_many :posts, CklNews.Post
    end

    def changeset(struct, params \\ %{}) do
        struct
            |> cast(params, [:name, :color])
            |> validate_required([:name, :color])
    end
end
