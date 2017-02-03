defmodule CklNews.PageController do
  use CklNews.Web, :controller

  def index(conn, _params) do
    render conn, "index.html", layout: false
  end
end
