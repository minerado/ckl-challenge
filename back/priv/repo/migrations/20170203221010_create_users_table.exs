defmodule CklNews.Repo.Migrations.CreateUsersTable do
  use Ecto.Migration

  def up do
    execute "
      CREATE TABLE users(
        id serial PRIMARY KEY
        , name text NOT NULL
        , image text NOT NULL
        , inserted_at timestamp NOT NULL DEFAULT now()
        , updated_at timestamp NOT NULL DEFAULT now()
      );
    "
  end

  def down do
    execute "DROP TABLE users;"
  end
end
