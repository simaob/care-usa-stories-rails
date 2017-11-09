class StoriesController < ApplicationController
  layout false

  def index
    client = Contentful::Client.new(
      access_token: '1006cdeed8363c2765d3a9109463a70feb1d460fa2bb484d623e36031d6f13a2',
      space: 'z7w9csq529dx'
    )
    @categories = client.entries(content_type: 'sectors', order: 'fields.name')
    @countries = client.entries(content_type: 'country', order: 'fields.name')
    @stories = client.entries(content_type: 'story', order: 'fields.story_date',
                             limit: 25)
  end
end
