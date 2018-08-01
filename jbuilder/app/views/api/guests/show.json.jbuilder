json.partial! 'guest', guest: @guest

@guest.gifts.each do |gift|
  json.gifts do
    json.set! gift.id do
      json.extract! gift, :title, :description
    end
  end
end
