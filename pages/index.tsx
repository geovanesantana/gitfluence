import Terminal from "@/components/home/terminal";
import Layout from "@/components/layout";
import { Prompt, Copy, Keyboard } from "@/components/shared/icons";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";

export default function Home() {
  return (
    <Layout>
      <motion.div
        className=" max-w-3xl px-5 xl:px-0"
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.div
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-light/20 bg-radial-gradient px-5 py-1"
        >
          <p className="text-sm font-semibold text-gray">
            Fast & Easy Git Command Generator
          </p>
        </motion.div>
        <motion.h1
          className="bg-gradient-to-br from-light to-stone-300 bg-clip-text text-center font-display text-4xl font-bold text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>Find the Git Command You Need Now!</Balancer>
        </motion.h1>
        <motion.p
          className="mt-6 text-center text-gray md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
            The AI-driven solution that helps you quickly find the right
            command. Get started with Git Command Generator today and save time.
          </Balancer>
        </motion.p>
        <motion.div
          className="mx-auto mt-10 flex items-center justify-center space-x-5"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <a
            className="relative flex max-w-fit items-center justify-center rounded-md border border-amber-700 bg-black-600 px-14 py-3 text-sm transition-colors hover:border-amber-600 hover:bg-black-700"
            href="#terminal"
          >
            <p className="bg-gradient-to-r from-yellow to-amber bg-clip-text text-base text-transparent hover:from-yellow-400 hover:to-amber-400">
              Get Started
            </p>
          </a>
        </motion.div>
      </motion.div>

      <div
        className="w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] -scroll-mt-16 pb-8 pt-36 xl:w-8/12"
        id="terminal"
      >
        <Terminal />
      </div>

      <div className="relative my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:w-8/12 xl:px-0">
        {steps.map(({ icon, title, description }) => (
          <div
            key={title}
            className="mx-auto max-w-md text-center xl:text-left"
          >
            <div className="flex items-center justify-center pb-3 xl:justify-start">
              {icon}
            </div>
            <h2 className="bg-gradient-to-br from-light to-stone-300 bg-clip-text pb-1 font-display text-xl font-bold text-transparent md:font-normal">
              <Balancer>{title}</Balancer>
            </h2>
            <div className="font-base prose-base leading-normal text-gray">
              <Balancer>{description}</Balancer>
            </div>
          </div>
        ))}

        <div className="absolute bottom-0 -left-12 right-0 -top-44 h-full w-full max-w-screen-xl rounded-[1000px] bg-feature-pattern opacity-10 blur-[160px] xl:h-[278px] xl:w-[748px] xl:opacity-30" />
      </div>
    </Layout>
  );
}

const steps = [
  {
    icon: <Keyboard className="h-8 w-8 text-yellow" />,
    title: "Describe the command",
    description:
      "Start by entering a description of what you want to accomplish with git into the web app's input field. ",
  },
  {
    icon: <Prompt className="h-8 w-8 text-yellow" />,
    title: "Receive suggestions",
    description:
      "Based on your description, the GitFluence will use its AI-driven solution to suggest the more relevant git commands.",
  },
  {
    icon: <Copy className="h-8 w-8 text-yellow" />,
    title: "Copy the command",
    description:
      "Now you can copy it and paste it into your terminal or command line interface.",
  },
];
