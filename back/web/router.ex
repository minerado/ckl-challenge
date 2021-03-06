defmodule CklNews.Router do
  use CklNews.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", CklNews do
    pipe_through :api

    get "/posts", PostController, :index
    get "/posts/:filter", PostController, :index
  end

  scope "/", CklNews do
    pipe_through :browser

    get "/*path", PageController, :index
  end
end
