require 'yaml'

parsed = YAML.load_file('all_reps_email.yaml')
fuck = parsed.map do |rep|
  contact_form = "Not Found"
  term_with_info = rep["terms"].find { |term| term.has_key?("contact_form") }
  if term_with_info
    contact_form = term_with_info["contact_form"]
  end
  id = rep["id"]["bioguide"]
  { id: contact_form }
end

puts fuck
