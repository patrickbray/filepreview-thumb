### Overview
 
Spike of using [filepreview](https://github.com/maxlabelle/filepreview) to generate thumbnails of various document types. 

### Running: 

`docker build -t pat/thumb-filepreview .`
`docker run -v /tmp/output:/opt/output/ -it pat/thumb-filepreview bash`

