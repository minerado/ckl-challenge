defmodule CklNews.PageView do
  use CklNews.Web, :view

  def js(conn) do
    case Mix.env do
      :dev ->
        "http://localhost:3000/bundle.js"
      :prod ->
        static_path(conn, "/js/bundle.js")
    end
  end

  def css(conn) do
    static_path(conn, "/css/bundle.css")
  end
end
