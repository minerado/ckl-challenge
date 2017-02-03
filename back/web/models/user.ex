defmodule CklNews.User do
    use CklNews.Web, :model

    schema "users" do
        field :name, :string
        field :image, :string
        timestamps()
    end

    def changeset(struct, params \\ %{}) do
        struct
            |> cast(params, [:name, :image])
            |> validate_required([:name, :image])
    end
end
