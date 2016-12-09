/**
 * Here goes Back-End's functions charged of processings
 *
 * All these functions are prefixed by "process__".
 */
function process__datetimed_web_app_name(
    config
)
{
    var web_app_name = get__web_app_name(
    )

    var datetimed_web_app_name = web_app_name
        + " \n\t" + "Datetime of sending   : " + config.datetime
        + " \n\t" + "Datetime of receiving : " + (new Date()).toISOString()
    
    return datetimed_web_app_name
}
