/**
 * Any code used inside this helper is ignored by Handlebars. Use it if your email service provider uses a Handlebars-like syntax.
 * @example
 * {{{{raw}}}}
 * {{ this }} code won't be parsed.
 * {{{{/raw}}}}
 */
module.exports = function() {
  return "2787 W Bullard Ave #101, Fresno, CA 93711";
}
