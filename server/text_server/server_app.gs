/**
 * Here goes Back-End's functions charged of serving
 *
 * All these functions except the official `doGet` are prefixed by "serve__".
 */
function doGet(
    config
)
{
    var datetime = new Date(
    )
    
    var iso_string_datetime = datetime.toISOString(
    )
    
    var file_name = iso_string_datetime.replace(
        /:/g
      , "-"
    ) + ".txt"
    
    var output = ContentService.createTextOutput(
        config.parameter.text
    )
    .downloadAsFile(
        file_name
    )
    .setMimeType(
        ContentService.MimeType.TEXT
    )
    
    return output
}
