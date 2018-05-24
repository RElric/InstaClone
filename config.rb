# Include needed Compass plugins
require 'compass/import-once/activate'

# Configure project paths
http_path = "/"
css_dir = "app/assets/css"
sass_dir = "src/assets/sass"
images_dir = "app/assets/images"
javascripts_dir = "app/assets/js"

# No cache methods
asset_cache_buster = :none
cache = false

# Configure output content style
line_comments = environment == :development
output_style = (environment == :development) ? :expanded : :compressed

#   ----------------------------------------------------------
#   NOTICE : for production stage, compile with the command :
#            compass compile -e production --force
#   ----------------------------------------------------------
