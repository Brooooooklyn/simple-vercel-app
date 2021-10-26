// import {Canvas} from '@napi-rs/canvas';

/**
  * @param {import('@vercel/node').VercelRequest} req
  * @param {import('@vercel/node').VercelResponse} res
  */
export default function generateImage(req, res) {
  // const WIDTH = 800;
  // const HEIGHT = 400;
  // const canvas = new Canvas(WIDTH, HEIGHT);
  // const ctx = canvas.getContext("2d");
  // ctx.fill = "blue";
  // ctx.rect(0, 0, WIDTH, HEIGHT / 5);
  res.send("Hello, world")
}
