defmodule CklNews.Repo.Migrations.CreatePostsTable do
  use Ecto.Migration

  def up do
    execute "
      CREATE TABLE posts(
        id serial PRIMARY KEY
        , title text NOT NULL
        , text text NOT NULL
        , image text
        , tag_id integer NOT NULL REFERENCES tags
            ON UPDATE CASCADE ON DELETE CASCADE
        , user_id integer NOT NULL REFERENCES users
            ON UPDATE CASCADE ON DELETE CASCADE
        , inserted_at timestamp NOT NULL DEFAULT now()
        , updated_at timestamp NOT NULL DEFAULT now()
      )
    "
  end

  def down do
    execute "DROP TABLE posts;"
  end
end
