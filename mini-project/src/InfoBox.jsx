import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "./InfoBox.css";

function InfoBox({ info }) {
  const INIT_URL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Txs1B32AIpJiv0cmMHNEX7XJyOWrYENKJw&s";
  const HOT_URL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYTmaZNUD5-MWgfyF-KjFO08Y_GlIQIL7YTw&s";
  const COLD_URL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfkATusoIzcED5E5d1xCKxwkLlD-K5_W-hw&s";
  const RAIN_URL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeo79kRF6BbMVATL7j9Fj1yVUDpXCMNIzjGA&s";
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels
                like {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default InfoBox;
