import Bus from "models/Bus"
import { getLineColor } from "utils"
export interface BusTileProps {
    bus: Bus
  }

const BusTile = ({bus}:BusTileProps) => {

    return (
        <div className={`flex flex-col items-center bg-neutral-300 border border-${getLineColor(bus.route)} border-2 shadow-xl rounded w-32 hover:scale-105`}>
            <svg className="mt-2 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="-4 -2 24 24" width="24" fill="currentColor"> <path d="M4 2a2 2 0 0 0-2 2v5l12-.037V4a2 2 0 0 0-2-2H4zm7 15H5v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2.535A3.998 3.998 0 0 1 0 13V4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v9c0 1.48-.804 2.773-2 3.465V19a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-2zm-7-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1z"></path></svg>
            <p className="text-black">{bus.busNumber}</p>
            <p className="text-black font-bold">{`Turno ${bus.shift}`}</p>
            <p className="text-black font-bold">{`Linha ${bus.route}`}</p>
            <a className="text-black mt-2" target="_blank" href={`https://www.openstreetmap.org/?mlat=${bus.coordinates[1]}&mlon=${bus.coordinates[0]}#map=19/${bus.coordinates[1]}/${bus.coordinates[0]}`}>Abrir no mapa</a>
        </div>
    )
}

export default BusTile