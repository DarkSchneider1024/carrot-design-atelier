from PIL import Image, ImageDraw

def grow_carrot(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    
    # Add space for the tip
    new_height = height + 100
    # Sample background color from top left
    bg_color = img.getpixel((5, 5))
    # Sample carrot color from bottom middle
    carrot_color = img.getpixel((width // 2, height - 10))
    # Dark stripe color
    stripe_color = (123, 45, 17, 255)
    
    new_img = Image.new("RGBA", (width, new_height), bg_color)
    new_img.paste(img, (0, 0), img)
    
    draw = ImageDraw.Draw(new_img)
    
    # Current bottom width
    # In the tight crop (30, 80, 315, 585), the carrot is centered
    left_x = 40
    right_x = 240
    bottom_y = height - 1
    
    tip_y = new_height - 15
    tip_x = width // 2
    
    # Draw curved tip
    points = [
        (left_x, bottom_y),
        (left_x + 15, bottom_y + 35),
        (tip_x, tip_y),
        (right_x - 15, bottom_y + 35),
        (right_x, bottom_y)
    ]
    draw.polygon(points, fill=carrot_color)
    
    # Final stripe
    draw.line([(tip_x - 25, bottom_y + 25), (tip_x + 15, bottom_y + 35)], fill=stripe_color, width=6)
    
    new_img.save(output_path)
    print(f"Final grown carrot saved to {output_path}")

if __name__ == "__main__":
    grow_carrot("public/images/logo.png", "public/images/logo.png")


if __name__ == "__main__":
    grow_carrot("public/images/carrot_crop.png", "public/images/logo.png")
