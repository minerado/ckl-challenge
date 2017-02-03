# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :ckl_news,
  ecto_repos: [CklNews.Repo]

# Configures the endpoint
config :ckl_news, CklNews.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "V+ZeCFPckwg57ysF8HgbfMAW6Cw0LB7qXlpLwn+W3hHMW0JLl6+OOC9fUKffYP9D",
  render_errors: [view: CklNews.ErrorView, accepts: ~w(html json)],
  pubsub: [name: CklNews.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
