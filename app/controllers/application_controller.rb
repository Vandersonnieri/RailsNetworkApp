class ApplicationController < ActionController::Base
    include SessionsHelper #helper already on views, here also include it on controllers
end
