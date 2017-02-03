defmodule CklNews.Repo.Migrations.CreateTagsTable do
  use Ecto.Migration

  def up do
    execute "
        CREATE TABLE tags(
          id serial PRIMARY KEY
          , name text NOT NULL
          , color text NOT NULL
        );
    "

    execute "CREATE UNIQUE INDEX only_lowercase_tag on tags (lower(name));"
  end

  def down do
    execute "DROP TABLE tags;"
  end
end
