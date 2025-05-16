import { PromptType } from '@/types/promptType';
import OpenAI from 'openai';

const prompt: PromptType = {
  디즈니: `A 3D animated portrait in the exact style of a Disney or Pixar character, inspired by movies like Tangled, Frozen, and Encanto. The character has extremely large and expressive eyes, a small nose, soft rounded facial features, and slightly exaggerated proportions. The skin is flawless and glowing, with soft lighting and a dreamy fairytale color palette. The expression is kind and charming, like a Disney princess or prince. Rendered with cinematic lighting and studio-quality background. Stylized, not realistic. Disney 3D animation look, not anime or cartoon.`,
  마인크래프트: `Convert this image into Minecraft style: voxel art, pixelated blocks, low resolution textures, cubic shapes, blocky environment, bright lighting, 2D Minecraft aesthetic.`,
  스누피: `Face illustration in Peanuts cartoon style, minimal lines, round head, small dot eyes, simple mouth, flat colors, inspired by Snoopy and Charlie Brown comics. No shading, no realism.`,
  심슨: `Convert this person into a character in *The Simpsons* TV show. Use flat 2D cartoon style with thick black outlines and a limited color palette. The character must have bright yellow skin, large round white eyes with black pupils, a wide overbite, and a comically exaggerated facial expression. Style the hair in blocky or spiky cartoon shapes. Use only flat shading — no gradients or 3D effects. Ensure the character looks like it belongs in a screenshot from The Simpsons, standing in Springfield with the show's signature humor and satirical American cartoon vibe. No realism, no anime, no webtoon — only classic Simpsons art style.`,
  레고: `A scene in LEGO style: made of colorful plastic bricks, blocky shapes with visible studs, glossy plastic texture, modular toy design, bright primary colors, highly detailed, resembling LEGO minifigures and LEGO structures`,
};

const postConvertedImage = async (
  imageUrl: string,
  selectedPrompt: keyof PromptType
): Promise<string> => {
  try {
    const openai = new OpenAI({
      apiKey: import.meta.env.VITE_API_KEY,
      dangerouslyAllowBrowser: true,
    });

    const visionResponse = await openai.chat.completions.create({
      model: 'chatgpt-4o-latest',
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: 'Please describe this picture in English in great detail, without using markdown. Especially focus on the build and gender.',
            },
            {
              type: 'image_url',
              image_url: {
                url: imageUrl,
              },
            },
          ],
        },
      ],
      max_tokens: 1000,
    });

    const imageDescription = visionResponse.choices[0]?.message.content;

    const img = await openai.images.generate({
      model: 'dall-e-3',
      prompt: `2D Anime-style ${prompt[selectedPrompt]} for One image this style: ${imageDescription}`,
      n: 1,
      size: '1024x1024',
    });

    const url = img.data && img.data[0]?.url ? img.data[0].url : '';
    return url;
  } catch (err) {
    return '';
  }
};

export default postConvertedImage;
