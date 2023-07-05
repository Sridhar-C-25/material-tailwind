// @material-tailwind/react components
import { Typography, Button, Input } from "@material-tailwind/react";

export default function SectionSubscribe() {
  return (
    <div
      className="z-90 relative mx-auto mb-20 w-12/12 rounded-xl container"
      style={{ backgroundImage: "url('/img/subscribe.jpg')" }}
    >
      <div className="flex flex-wrap items-center p-20 md:p-10">
        <div className="w-full px-4 lg:w-5/12">
          <Typography
            variant="h2"
            color="white"
            className="mb-2 font-black tracking-normal"
          >
            Sign up for our newsletter
          </Typography>
          <Typography color="white" className="opacity-80">
            Join our newsletter and get news in your inbox every week! We hate
            spam too, so no worries about this.
          </Typography>
        </div>
        <div className="w-full px-4 lg:w-6/12 ml-auto">
          <form
            action="https://material-tailwind.us1.list-manage.com/subscribe/post?u=e97df4875fc1b2fb28f609b88&amp;id=628d9b1722"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
            className="mt-4 block md:flex flex justify-end lg:mt-0"
          >
            <div className="w-full md:w-8/12">
              <Input
                required
                type="email"
                size="lg"
                name="EMAIL"
                id="mce-EMAIL"
                placeholder="Enter your email"
                className="focus:!border-t-blue-500 focus:!border-blue-500 py-6 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-400 text-blue-gray-500"
                labelProps={{
                  className: "hidden" 
                }}
                containerProps={{ className: "min-w-[100px]" }}
              />
            </div>
            <Button
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              size="lg"
              className="mt-3 w-full md:mt-0 md:ml-3 md:w-auto capitalize bg-slate-950 shadow-none hover:shadow-none font-medium text-md"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
