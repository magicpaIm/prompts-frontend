import Head from 'next/head';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import PromptCard from '@/components/PromptCard';
import Icon from '@/components/Icon';
import { FEATURED_MAP } from '@/helpers/constants';
import {
  featuredPrompts,
  weekPrompts,
  monthPrompts,
  midjourneyPrompts,
  gpt3Prompts,
  dallePrompts,
  diffusionPrompts,
} from '@/helpers/mock';

export default function Home() {
  return (
    <>
      <Head>
        <title>Prompts</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex flex-col items-center mb-36">
          <h3 className="mb-9 font-semibold">Featured In</h3>

          <div className="flex flex-wrap max-w-[1005px] gap-y-8 -mr-20">
            {FEATURED_MAP.map(({ title, image, width, height }) => (
              <Image key={title} className="mr-20 last:mr-0" src={image} alt={title} width={width} height={height} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center mb-36">
          <div className="grid grid-cols-3 gap-x-5 px-28 pb-7 mb-16 border-b-[0.5px] border-b-white">
            <button className="prompts-button active">Featured Prompts</button>
            <button className="prompts-button">Trending Prompts</button>
            <button className="prompts-button">Newest Prompts</button>
          </div>

          <div className="grid grid-cols-4 gap-x-6 gap-y-8 mb-16">
            {featuredPrompts.map(({ title, price, tag, image }) => (
              <PromptCard key={title} title={title} price={price} tag={tag} image={image} />
            ))}
          </div>

          <button className="browse-button">Browse Marketplace</button>
        </div>

        <div className="flex flex-col items-center py-16 mb-24 bg-[#0B88D980]">
          <h2 className="mb-5">What is Prompts?</h2>
          <div className="flex flex-col max-w-[743px] text-center gap-y-2.5">
            <p>Prompts are becoming a powerful new way of programming AI models like DALL·E, Midjourney & GPT-3.</p>
            <p>However, it&apos;s hard to find good quality prompts online.</p>
            <p>
              If you&apos;re good at prompt engineering, there&apos;s also no clear way to make a living from your
              skills.
            </p>
            <p>
              PromptBase is a marketplace for buying and selling quality prompts that produce the best results, and save
              you money on API costs.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center mb-36">
          <div className="prompts-swiper-action">
            <div>
              <h3>Most Popular Prompts This Week</h3>
              <div>
                <button>
                  <Icon>left</Icon>
                </button>
                <button>
                  <Icon>right</Icon>
                </button>
              </div>
            </div>

            <Swiper slidesPerView={4}>
              {weekPrompts.map(({ title, price, tag, image, rating }) => (
                <SwiperSlide key={title}>
                  <PromptCard title={title} price={price} tag={tag} image={image} rating={rating} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="prompts-swiper-action">
            <div>
              <h3>Most Popular Prompts This Month</h3>
              <div>
                <button>
                  <Icon>left</Icon>
                </button>
                <button>
                  <Icon>right</Icon>
                </button>
              </div>
            </div>

            <Swiper slidesPerView={4}>
              {monthPrompts.map(({ title, price, tag, image, rating }) => (
                <SwiperSlide key={title}>
                  <PromptCard title={title} price={price} tag={tag} image={image} rating={rating} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button className="browse-button">Browse Marketplace</button>
        </div>

        <div className="blog">
          <Image src="/youtube.png" alt="youtube" width="555" height="330" />

          <div>
            <h2>Earn from your Prompt Engineering skills</h2>

            <div>
              <p>PromptBase is an early marketplace for DALL·E, Midjourney, Stable Diffusion & GPT-3 prompts.</p>
              <p>Sell your prompts on PromptBase and earn from your prompt crafting skills.</p>
              <p>Upload your prompt, connect with Stripe, and become a seller in just 2 minutes.</p>
            </div>

            <button>Sell A Prompt</button>
          </div>
        </div>

        <div className="flex flex-col items-center mb-36">
          <div className="prompts-swiper-action">
            <div>
              <h3>Newest Midjourney Prompts</h3>
              <div>
                <button>
                  <Icon>left</Icon>
                </button>
                <button>
                  <Icon>right</Icon>
                </button>
              </div>
            </div>

            <Swiper slidesPerView={4}>
              {midjourneyPrompts.map(({ title, price, tag, image }) => (
                <SwiperSlide key={title}>
                  <PromptCard title={title} price={price} tag={tag} image={image} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="prompts-swiper-action">
            <div>
              <h3>Newest GPT-3 Prompts</h3>
              <div>
                <button>
                  <Icon>left</Icon>
                </button>
                <button>
                  <Icon>right</Icon>
                </button>
              </div>
            </div>

            <Swiper slidesPerView={4}>
              {gpt3Prompts.map(({ title, price, tag, image }) => (
                <SwiperSlide key={title}>
                  <PromptCard title={title} price={price} tag={tag} image={image} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button className="browse-button">Browse Marketplace</button>
        </div>

        <div className="blog flex-row-reverse">
          <Image src="/generate.png" alt="generate" width="555" height="330" />

          <div>
            <h2>Generate images directly in PromptBase</h2>

            <div>
              <p>Start prompt engineering instantly within PromptBase using Stable Diffusion.</p>
              <p>Craft prompts and sell them on the marketplace.</p>
              <p>Get 5 free generation credits every day.</p>
            </div>

            <button>Generate Images</button>
          </div>
        </div>

        <div className="flex flex-col items-center mb-36">
          <div className="prompts-swiper-action">
            <div>
              <h3>Newest DALL·E Prompts</h3>
              <div>
                <button>
                  <Icon>left</Icon>
                </button>
                <button>
                  <Icon>right</Icon>
                </button>
              </div>
            </div>

            <Swiper slidesPerView={4}>
              {dallePrompts.map(({ title, price, tag, image }) => (
                <SwiperSlide key={title}>
                  <PromptCard title={title} price={price} tag={tag} image={image} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="prompts-swiper-action">
            <div>
              <h3>Newest Stable Diffusion Prompts</h3>
              <div>
                <button>
                  <Icon>left</Icon>
                </button>
                <button>
                  <Icon>right</Icon>
                </button>
              </div>
            </div>

            <Swiper slidesPerView={4}>
              {diffusionPrompts.map(({ title, price, tag, image }) => (
                <SwiperSlide key={title}>
                  <PromptCard title={title} price={price} tag={tag} image={image} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button className="browse-button">Browse Marketplace</button>
        </div>
      </main>
    </>
  );
}
