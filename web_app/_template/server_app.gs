/**
 * Here goes Back-End's functions charged of serving application
 *
 * All these functions except the official `doGet` are prefixed by "serve__".
 */
function doGet(
    config
)
{
    var template = HtmlService.createTemplateFromFile(
        'client_index'
    )
    
    template.http_params_stringified = JSON.stringify(
        config.parameters
    )

    var evaluated_template = template.evaluate(
    )
    
    var web_app_name = get__web_app_name(
    )
  
    evaluated_template.setTitle(
        web_app_name
    )
  
    return evaluated_template
}

function serve__template_raw_content(
     file_name
)
{
    var template = HtmlService.createTemplateFromFile(
        file_name
    )
    
    var template_raw_content = template.getRawContent(
    )
  
    return template_raw_content
}

function serve__datetimed_web_app_name(
    stringified_config
)
{
    var config = JSON.parse(
        stringified_config
    )
    
    var datetimed_web_app_name = process__datetimed_web_app_name(
        config
    )
    
    return datetimed_web_app_name
}
