package wing.api.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import wing.api.domain.artist.Artist;
import wing.api.domain.artist.ArtistRepository;
import wing.api.domain.transactionData.TransactionData;
import wing.api.domain.transactionData.TransactionDataRepository;
import wing.api.domain.user.User;
import wing.api.domain.user.UserRepository;
import wing.api.web.dto.transactionData.TransactionDataResponseDto;
import wing.api.web.dto.transactionData.TransactionDataSaveRequestDto;

import java.util.HashSet;
import java.util.Set;


@RequiredArgsConstructor
@Service
public class TransactionDataService {

    private final TransactionDataRepository transactionDataRepository;
    private final ArtistRepository artistRepository;
    private final UserRepository userRepository;

    public IllegalArgumentException exception(Long id) {
        return new IllegalArgumentException("아티스트 정보 없음" + id);
    }

    @Transactional
    public Long save(TransactionDataSaveRequestDto requestDto) {

        User user = userRepository.findById(requestDto.getUserId()).orElseThrow(() ->
                new IllegalArgumentException("해당 유저가 없습니다."));


        Artist artist = artistRepository.findById(requestDto.getArtistId()).orElseThrow(() ->
                exception(requestDto.getArtistId()));

        return transactionDataRepository.save(requestDto.toEntity(user, artist)).getTransactionId();
    }


    public Set<TransactionDataResponseDto> findByArtist(Long id) {
        Artist artist = artistRepository.findById(id).orElseThrow(
                () -> exception(id));

        Set<TransactionDataResponseDto> responseDtos = new HashSet<>();
        Set<TransactionData> dataSet = transactionDataRepository.findByArtist_ArtistId(id);

        for (TransactionData data : dataSet) responseDtos.add(new TransactionDataResponseDto(data));
        return responseDtos;
    }

    // 유저가 후원한 데이터
    public Set<TransactionDataResponseDto> findByUser(String userId) {
        User user = userRepository.findById(userId).orElseThrow(
                () -> new IllegalArgumentException("해당 유저 없음"));

        Set<TransactionDataResponseDto> responseDtos = new HashSet<>();
        Set<TransactionData> dataSet = transactionDataRepository.findByUser(user);

        for (TransactionData data : dataSet) responseDtos.add(new TransactionDataResponseDto(data));
        return responseDtos;
    }
    
    
}
