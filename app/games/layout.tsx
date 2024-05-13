import { Grid } from "../components";
import LastWinner from "./LastWinner";
import Menu from "./Menu";
import MoreGames from "./MoreGames";

export default function GamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Grid className="lg:grid-cols-6 gap-5 lg:p-2 p-5">
        <Grid className="grid-cols-1 gap-5 lg:grid hidden">
          <Menu />
          <LastWinner />
        </Grid>
        <Grid className="col-span-4">{children}</Grid>
        <Grid className="grid-cols-1 gap-5 lg:grid hidden">
          <MoreGames />
        </Grid>
      </Grid>
    </div>
  );
}
