defmodule CklNews.TagView do
    use CklNews.Web, :view

    def tag_json(tag) do
        %{
            name: tag.name,
            color: tag.color,
        }
    end
end
