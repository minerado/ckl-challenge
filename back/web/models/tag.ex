defmodule CklNews.User do
    use CklNews.Web, :model

    schema "tags" do
        field :name, :string
        field :color, :string
    end

    def changeset(struct, params \\ %{}) do
        struct
            |> cast(params, [:name, :color])
            |> validate_required([:name, :color])
    end
end
