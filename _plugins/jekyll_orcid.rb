require 'faraday'
require 'faraday_middleware'

module Jekyll

  FORMATS = ["bib","json","yml"]

  class BibliographyFile < StaticFile
    def initialize(site, base, dir, name)
      @site = site
      @base = base
      @dir = dir
      @name = name

      if site.config['orcid']
        url = "http://feed.labs.orcid-eu.org/#{name}"
        response = Faraday.get url
        text = response.status == 200 ? response.body : ""

        if File.extname(name) == ".bib"
          content = <<-eos
---
url: #{url}
---
#{text}
          eos
        else
          content = text
        end

        File.open(self.destination(site.source), File::WRONLY|File::CREAT) { |file| file.write(content) }
      end

      super(site, base, dir, name)
    end
  end

  class BibliographyGenerator < Generator
    safe true
    priority :highest

    def generate(site)
      if site.config['orcid']
        dir = site.config['scholar'] ? site.config['scholar']['source'] : "./_bibliography"
        FORMATS.each do |format|
          file = BibliographyFile.new(site, site.source, dir, "papers.#{format}")
          site.static_files << file if dir.match /^(.*?\/)?[^_]\w*$/
        end
      end
    end
  end

end