defmodule CklNews.PageView do
  use CklNews.Web, :view

  def js(conn, name) do
    case Mix.env do
      :dev ->
        "http://localhost:3000/js/" <> name <> ".js"
      :prod ->
        static_path(conn, "/js/" <> name <> ".js")
    end
  end

  def css(conn) do
    static_path(conn, "/css/bundle.css")
  end
end
