package demos.rmi.s;

import java.rmi.RemoteException;
import java.time.LocalDateTime;
import java.time.ZoneId;

public class WorldClockService implements WorldClock {
    @Override
    public LocalDateTime getLocalDateTime(String zoneId) throws RemoteException {
        System.out.println("getLocalDateTime invoked!");
        return LocalDateTime.now(ZoneId.of(zoneId)).withNano(0);
    }
}