import type { NextApiRequest, NextApiResponse } from "next"
import teslac from "teslac"

let batteryInfo = {}
let fetching = false

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method === "GET") {
    res.status(200).json({
      fetching,
      batteryInfo,
    })
  }
  if (req.method === "POST") {
    if (!process.env.TESLA_ACCESS_TOKEN || !process.env.TESLA_REFRESH_TOKEN) {
      res.status(404).json({
        err: null,
        msg: "no access_token or refresh_token",
      })
      return
    }
    fetching = true
    teslac(process.env.TESLA_ACCESS_TOKEN, process.env.TESLA_REFRESH_TOKEN)
      .then((tc) => {
        tc.control(
          tc.vehicles[0].id,
          tc.ownerApi(`/vehicles/${tc.vehicles[0].id}/data_request/charge_state`)
        )
          .then((res: any) => {
            batteryInfo = res
            fetching = false
            res.status(200).json({
              fetching,
              batteryInfo,
            })
          })
          .catch((err: any) => {
            res.status(404).json({
              err,
              msg: "charge_state err",
            })
            fetching = false
          })
      })
      .catch((err) => {
        res.status(404).json({
          err,
          msg: "init err",
        })
        fetching = false
      })
  }
}
