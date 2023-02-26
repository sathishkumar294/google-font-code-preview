import path from "path";
import { promises as fs } from "fs";
import { NextApiResponse } from "next";

export default async function handler(req, res: NextApiResponse) {
  const codeDir = path.resolve("./public", "codes");
  //Read the json data file data.json
  const fileContents = await fs.readFile(codeDir + "/code.java", "utf8");
  //Return the content of the data file in json format
  res.status(200).json({ fileContents });
}
