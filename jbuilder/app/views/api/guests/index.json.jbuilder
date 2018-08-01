# json.array! @guests do |guest|
#   json.partial! 'api/guests/guest', guest: guest
# end

# puts json.array! @guests
json.array! @guests, partial: 'api/guests/guest', as: :guest
