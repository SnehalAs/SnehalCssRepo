let defuserEl = document.getElementById("defuser");
let counterEl = document.getElementById("counter");
let myImageEl = document.getElementById("myImage");
let resultEl = document.getElementById("result");

let counter = 10;

let intervalId = setInterval(() => {
  counter -= 1;
  counterEl.textContent = counter;

  if (counter < 0) {
    clearInterval(intervalId);
    resultEl.textContent = "Bomb Blast!";
    myImageEl.src =
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC9ALgDASIAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAAAAYFBwECBAMI/8QASBAAAQMDAwIDBQQGBwYFBQAAAQIDBAAFEQYSITFBE1FhBxQicYEyQlKRFSNicqGiFiQzgpKxwUNzk9Hh8Rc0Y7LwJSZTdaP/xAAbAQACAwEBAQAAAAAAAAAAAAAABAMFBgIBB//EADcRAAEDAgMFBgUDBAMBAAAAAAEAAgMEEQUhMRJBUWGREyJxgaHBBhSx0fAjMkIVM1LhcoLx0v/aAAwDAQACEQMRAD8AtuiitSccDrQhZzyB59fSs0r3fW+kbGtxqXcEuymyUriwU+8PJUOClZSdiSPIqFQA9qsBxW6Pp+9Oxz0cCW8kfup3D+avCQMyvQCdFY9FJMD2m6OluBmUuZbXuBi4sbUEntvZKwPrinJh+PJabfjutPMOpC2nWVpcbcSfvIWgkEfWvV4vSiisEkfM8UIWc1XftNnTGGLFGiPKbdS/IvAU39oOW/wyyPluXn5p9KsLA6nHz71WHtCWBeLeFLTsZtW857Bx9wkn0+CoJ3mOMuCtMIpW1lYyB+hvfyBPsrJhSmp0KDNZ/spkZiU3+48gOD/OuilH2eTBL0vAb8TxFW96Xblq56MulTYwefsKRTdU4N1WEWNkUUUULxFYJwCfSskgDmvP4lH/AC9KELcHIB8xWaPKihCKKKKEIooNa8nrjp3oQtqK16EY+oooQskkYx1JA5qqL7qDUGprtdLBZZCYVrgrU1OmtqV4rpB8NeSg5wSCEJChkAkns3bH/MVSGkEe7XrWkI9WpRTz/wChJea/1qvxOofTUr5o9R90zSRNlmax2hU5a9M2G1JSWoyXnxyZEsJddz5pBG1P0A+ZqdQt1PKCrA8hkfx4qE1Jcpdps8uZECPHS4w0hTiQsNh1RBWEngkds+dQ40X7WLghMqRcxHdUAQy7cnULHcYTFSpofnWFo8MqsXBqHyb7Z3JWgnqoaM9kGJ0cj2y6gRbpCjSELylK1NpC0k+v/LFLjjdx9nNwYlxHX5GmJTzaZ8NxanPdkuqwH2M9x09cYOchSYay3HVkDUP9Hru77ytIX4pLqJDkYoaLwWHmyT5Agnv2NN9+cXMst4akbVoRbpqhlIzlLRcBJ8wQD9KaiknwapbBI64NtDlYm2nH80Szo2VjDJGLDPryT+04080080tK2nW0OtrQcpWhYCkqSfIjmtiM/TkUsaAkOydIaccdJKkx3o4z+CPIdYR/BIpor6As+tep6H1z0zVR67WmRqKcz1DdugxVfNSXnSPyWKt7mqOvcr3y+X+WCFJcuLzbak9C1GCYiCPojP1pGudsw+YWp+FIO2xEcAHE+Yt7pp9mkjZ71G3Dwrha7ZdmEgY/XMFdrlk+pU2kn971qyKqjRz6ozNglDPh2+/XTT8nAHEa6FDzSlHyDvhD+9Vr11Rzdqw8QSOhy9LFZyaIxSFh3IrzW/GbcZZceaQ8/wCIWG1rSHHfDAKvDQTk44zgVupSUJUpakpSkFSlKICUpAySSeMVXNt/+4dXWu8OhQQhiZdILTgUCza2cwYSsKSCC8tbzx56JT5Uy54aQDv/APVFZWHkqI/+YrcAD/Ws4A6Ciu14iiisKUlO3coDKgkZIGVHoBnvQhZooooQitOnBz6EVvRQhYA/6UVmihCKpS0/qtea5a/G/c3PznIX/rV11S8cBv2j6tT+NEs/4lMOVV4uL0Mvgm6I2qGeKlNVRZMyw3NiM0t17+ruIbbBUtXhvIUrakck4ya1kX/2j31pMaFEbsEJTSG1yH1qVOUAkJVtVgLGeow2nH4qna83340UbpL8eOk95DrbI/8A6EVgcPxiejhMELQSTe+vDd5LR1NDHNIJJDZRtmsMCzIcLJW9LfA95lPf2rpzuIA5wM84z8ycccOsrmYFpVFbBMm7FcRvsEsjaXST05BCR+8fKmKHItU07WLnAWvsht5twn/hqP8AlWLnZ2JkdTFwjNvx1ElKhzsUQRvbWOUq9f8AtUEU7xVtqawF1jc8eXTguniPsjDCQFD6N1THsUFVsu722FFjuPRpGMlpQBcXHIHJCjkt+p29wKi5F51prl6QYcpdosCHFNpDSlpcdHktTZClq/ENwSPnypYvVnucCbCsqXVPRZ0hv9HvL+2pKlBvw3COMoJ5+h6HAtCHEjwo8WFFQEssISy0nj/Eo+ZOST5mtfiOMupaZjoiHOfoeXHx3JN9JTVNSXQtLWAC4PHeBySw1oWKkpW1fbnHljCkSONoWOhw2Qsf46grnab3plTJmLRMtbqtjctgE7FdgrPIPpk/PPFMiNaWNy5ptqG5CkrkJity07C0t1StgOzO7bnofrimh6CzdLXe7dISFNvRlFGRnY7glK0+oIB+lU7MRroJGsrxdrs8wNOItwU0Tm05NRQus5uWXvxCR7JPtrNs11FmzWYrTzdvlwXVq+IylNKLa2UJytRCkIVwD0pnb9psuW20q1aVuU0FCA66pwMMh7aN6UqQ24MA9MqH0pF0npv9KeHcrmCuGwfCiMq6SFNkglX7CTkY7n0GDZKEBCUttoAQhICENpAShIGAAlPAAp2pxSPC5ZI4e+5xF+AIAHmTbNLOpTXyOqHd0OJNt+Zv0UPd9bO3CG3arrabhYmLjJajXCY6VvMJgHKnW23W0JO5zGz7BACie1M+lEsSpWpLwwUqivymLTbigpU17lbG/D3MKTxsU4pzGPIVHuNtuIW082hxpxO1xp5IU24k9lJVxiollStE3W3SYji/6MXyQ3HmRHFkt26S6QEyGsngdd3oMdhtnw3F466pBmGy8AgDdnYnmDkk6uhNO27TcK0KXtQ6piWJt1LbCps1poSHYzTgbDLJUEpU+6QraVkhLY2kqUQAMZKS73uSJK7LZQ25dvDQ5MfcG+LaGHOUuyMdXFDlpvOT1OE8qRrnOg2i5RYLDa5rlvWm63J6WvK5t3WnMZUtYAUQ2CXNoIGSgcbavKjEI4phTtzcczyHE+OgG8nglaWklqpBHELk6KxrneoNphImTdza3EAtRvhL7jm0EtpAOOM4Ueg/zq0XG8at1npdlSilqBMRc1MNFXgxWI60vZV5qOACojkqHQHAh7tdp8t73mSt2VOkrSxFaAKitxRwltptPYE9AO/matLRWlhp2At2Xhy8XDa9cHeCW+4joUONqe+Op9AMSwSOndt6NHqr3E6KnwqD5YnamdYk7mjWw5njw8U2UUUU6suiiiihCKKKKEKu7rata6Yddn6Ylyp1p+0/Z5K1SnIyftH3UPZUUegIV+91Sk2S5m762uFyLYbM2PIWpACgEqS02kjCueoq+qpqW34ftQvOAlKFJV5AKWq3tOKwB35yfn6812JtvSS/8T9E7SyfqMZYajPepq+uvs2W9usOLbdbhOqQ42SlaDlIJSocg4zSrZvZhf7zFi3KVcYcdmdHZlsFXiyX1odSFpLg+EDg/jNNV/H/ANCv/wD+vkdPQA1rpjXLMS12iDcIi/DjQYsdp+IQVbG2koT4jbhHPHJCvpWe+GZGRU7y/LvewVzWUNRWy2p27WyLkeagp/sivrDa3rfdIsx5HxBpxpURaiOzaipSM+WSB613aGvV3W9edP3rxi/AjPOD3j+2QG1BtTbhPJIJGD6/KrCZ1TpV5lb/AOlYjTaEFa/eVmOpIHJ+F4Ak/LNVrp9S7rftV6lCFoiTpDseFvTtLjXiJVuI9AlGfUnyq2xsxOonvdY208VVU0EzKgRPBad4Ispq6MNOGyvuAbol3hrSo4yPG3R8c+ZKfyFdklDzkaY2yQl5yLIbZUTgJcW0pKTn54qB1pKMWwulLhQ69NhIZI+1vbX7xkfLaDXVYdQQb5HbKVtonpSBJikgL391tJJyUnqMdOh8zgvlpjSMqQLhpI8ND0vdaDtYxM6E5EhJ8KCue7pG2R7U9Fdsrj0i9TJDAaUtxUgO7CsDJwEgIyfvdMDJs1DriEvJSQA6narzxnPFa7XCDwrAGTnIAHqTxSpedTQ2LjZ7XDeQ74twhmfIbUCyhoPJHhIWOCSftkHjGOpO1mSSfGJAI22Db89cyb/QeSgZHFRMIcb3/AmWNHZjMx4rCAlplCGWkjoAOB/1pTkxb/rSVcY1skoiWO3Oqil11SwmZKQMqJDQKiOmOwBB6qwXDnkZwTkZ7gnjP0pSs2q7bpSyrs82JK/TEJ6YAyGsNy1uOrW274pP2SNoJweBxmosO7ch81M3bluLXzte93Z9OV1ziLtlrWaNP5ZcOlHr7b7zP07PeLjUNl8lveHUsuNqRgtL67Tnp69Mim7VqGndF3DeRuZWpSfMEOtrH/z1qB0pbbil26X26JKZ12WpYQpJStLa3C6tSknpuOMDsE+tM0iPHlMqjyW0usLW2tbTnLay2oLTuT0IyAcHypytrY4cQ7QAG2ztW4ggkheQUz5KUNceNr8NEt2fWK4tvaZtelLnJTtLsiVvWv3mYtI8V91YbUVKUrqSvOOOMYCoi4JU5JM9TrM9bjsmZ72gtLW84StagMfkMDjAq1UpUQEoScJAACRwkD0HGK4LlZbbe2hHmNpKyNjMhIHjMKPQoV1x5g8f5gpcSpmyuJiLQ85naJPr7WTlEJcMf28JDiBaxGXpouP2d6dVMfOqri0Qgb2bIw4DhKB8KpRHn1CfqfI1Zz0iLGSFSH2WU9i84hsfmsiqbsBvshydpw2pVyulpdW0p+feJjMJiIjDbRMUuHKR0ASkcEfMsD2kVNR3JeorxZbPEwEOt2KFEiAKxkAT5aS+SfLHNb2KVx7sbO7uJIsRytc9bLKTyPmkdJKbuJzViMSIspsOxn2X2iSkOMOIcQSk4ICkEjjvXrSrpOXoVhhVr07cmHlF1yS6hx9apT7qkgLdIeAUeEjOE44/NqpxLoooooQiitSrKgAeM8+v50UIWx6GqinGN/4o3QPK+MMsBkKJwEm1tlW3HerdqmdbuOaf1zFvjrBcZlMsvNeGQnelDAhutKJ+8nhQP7QH7q1VGZIHsbqQR6KWFwbI1x3EJvlWl25226RW3AhUph6MAoZKA4nCVkf6ZpJRofVEVttp+5w2kIG1JQyXVhI6fb21Kta10q4N5uLrKlD4kvR5CVD0JaSpP8ay5rDSKMk3IrV5NxpSlH/EgD+NfPYTiFM0xQwmxO9t/qFqGTNbJ2rZrZWyNjbhkQuSNou3BaHLlLlXFSTkNrPgR8/7tslX89MzaGWGkobS00wy3wEhLbTTaBn0SEilCT7QbK2FCJCmyFj7JeLcds/kVq/hS5IuusNXOmBEYWpkkKVEgIKGQM8KkOKPT1UvFT/03EK07VY7YYONgB4AZD0UUlfBESY+84+fUle+pLqnUF0jxYWHLfbg4UlSlITJWSPEcyBkBWAlPHQZ78Rhs7cl8JtzyY0lSv1cG5vtsO7iRgR5itrC/TJQe2D1LtZPZ7dGW0+/So8TftU8Iw95kqP4N6sNJx8l/wDJvg6V07AUHEwxJfH2ZFwIkuJP7AWPDT/dQKbkx+ioGiCndtBosLZ9TpnyzSk0UEkIeSTKTc/4gcONx0VeMaS9oDxTHfac8Ipz4lwuCS0kg4wpttxxRHQ429PXkb6l0MbRYmrizIdlzY0gKuLmClAYcASktIyThBxk9TuJOMYFudKFJQtK0LSlaFpUhaFgKStKhgpUk8EHvWdPxdVmVjg0BgOYA18b3Sny4IzNykHTV/YvURtC1pTcWGwJTPRS9vHjNjuD1OOh9MEsZhSVltZilRSMtq2oUU/uq7UkXz2c3CPIXN007lAV4iIq3i1IYV5MPKIBHllQI8z1rgad9sbGIqG7sfuguR2XB5f2y0kfzVZuoaOsJno5mgHcTYj8/CU6zEZGNDJG3I36qwJrsa1x3JlydRHZRjAWcrcUeiQE5OfQc/IcjIBJA7k4+pqqdS2XVsKPBud/kKddlvOMhCny8uOpKQsJUU/qxnnAST0qy7bOZuMGFOZOUvtIUQDkocAwtB9UnI/70lX4cynp2TRP2wSQSNMt31TtHWGd7muFkkX2Tdrl75dRI92sVsu6bY0lLzjbr76FcrbCByfvKOQQDxnbw92syHrdannXMvriR3HXFZ+JxYCh26kEZqHc0rZ3pa5Dy5bjCpDkwwVugwxIcOVuJRjIz3GeenQYE5IlsQ47suS54cWGjxnFccBJ4AH4icBI8yKbrK2nngjp4G3tplYjQW5knMneo4KeWJ75ZDqlZ2bZoftB1RInzFxIqLelK1tSZMdxb6URvhQYqkrJ68Z7elRTaLhri6LffcnN2CC6pLDciU/IWnISfDSt9aj4iuCs5OM48gYGHDn6svkx45SmRIclzXuqY7S15wPX7qR/oCRbESJFgxo8SK2G2GEBDaR+ZKj3JPJPrVviNZ/TGBjHkyFoFr5Ntvtpc/nNCjpPmXl7h3Qeqg7npmyRrVcblbGjb7jZmRcIkiO44DuZO/B3KJ7cH/sWjSNy17cnIsm7Q2G7PJt6JDMhxyMZDzjgQptSERsYSQScKT5c8fFBaoeLOm9Q4/2seO0cftSWh/rT379aLDard+kZkaGyzDjsoMhxLe7wmUja2k/ETx0ANO/Dk0s9O50ribHf4BQ4nG2OazRZS1aKV1A+tVzP9pwkvKiaWtMm5PBQBkSG3G44TuxuDaTvwfNRRjyroga1vsSbDj6otDMOJNdQxGuEReWG3lnAD43rAB6Z3DGM4xnboTNG14jLhtHdfPoq8McRtAZJ/SnHJ69vSitqKlXC0cdaaALriEA9C4pKR/MaXtR27SWo4Yh3KZESptRcjPtSY6JEdZwCW1KJGD0UCCD8wCmKney/SExwutG5Q1nJJjS1OAknOT70HD/MKiXfZS6k/wBT1NLbSOiZEVL38UupH8K4dtfxTEIgP94keFj9SFEPey+yFRLGsYaUdkvMx1ED1UmSB/LSvddN221XJEFy6SZsdLDTqpVtgtvBSlk5abAkbOMckrHXpjkuy/ZnqhAPg6ghOHsH4akA/Mp3GuVfs89oCM7JthdH78hJP08AD+NQvM5FgB1/0rFkeFn90jx/1H/0lyOxoyKsKFi1BcCPu3GXGiNEjvtjjd/OaY4+s5UNkR7ZpWDCYByECYjaT+JSWWk8+ua53NF+0ZrIEC2SMdPBloRn/iqTXA/ZtbwULcmablBCEqWtcd1p5CEpBJUotKUMD51SVOGOqP7zdvxc63S4HoriniwH+Uzx5D2aVLr1xq5X9nBsjWR/tDLdI9fhWBXG9q7WZAUq4W+MCQlPgQQ4So8BKA6VEnyAFcMKNKmx2pjvhWyA5k+/XhaWWVYwf6s3uDjh8sADjr2qWiXzSllVvssCberjt2KuUsCMyM5yGVOp+FPXIS2M9yetVLqSniuI6cOdwAFvNzsh9eSZqWYUy0dI10zzzNvSxPgOoUpard7QroUvXe+zoMJSRtZZYiRp72R+FpGGx88q/ZHZ2ZaSy02ylTig0kI3POLddPGcrW4SonucmqnuOp9WTG31v3BMKMlClmPaU+Eo7RwPeV5dyehwR1p80+3Gs0Ox2N5ZN0kQnrlKRnc5vUoLeddVnP2lbEk9dv7JxnMZo5jEJHlozyYwZAAXJJyvbz1VLUUk1I4du3ZLs7X9s7eeaYKK1W422krcWhCQUJ3LISMrUEJGT5kgD51w3a7wbKxFkztyYz0xqG46kZDBcQtSXFjrtyMHHn3xWVigkmcGRi5OnNQlwGZXlqGzM360y7c4oIW5tcjOkZ8GQ2coX8uoV6KNU3EueoNHTpMCRHwkKBkQ5BOxZxgPNLT3IHChkEdjji9SUSGMsv4Q80FMvx1IVwoZS42rlB7EdQfUGkyZcrLOkPaa1lFjsTUp/qk3GyNIQ4cIfivKyW1HHIKiMggn7ta7AK18UUlNIztI9S3+Q4kDeOO8aqCS7XB7DY8Uvj2iW3w8m1y/Gx9jx2vD/wAe3P8ALS1cb3fdVyokBtCUNLdAjw2CQ3vwf1jqlckgZJJ4AzwO/vqSwMafeMR1vxHngFQXWlqw+0TtDim8nBB4I8+hI6Nuk9O/oeMZMpA/SUpA8QEDMZonIZB8z1X+X3cq1TjhuHQfOU7Lk/tvnfwz0479ybdHUVD2xOkDha5tu5HIZ8lKWS0RbLBbiM4Us4ckvYwp54jlXyHRI7D1JJ70vxluvR0PsLfZ2l5lDqFOtbuniIByPqKir/eV2phhmGgv3i4LDFtjtp3r3qOwPFGDkA8JGOT6A0j6Ydft2qFNXLx2JMlD8aR78lTT3jvBLoDoc5yogYz1yPOqGHDJ66CWulJvmRztr5bgnX1cdPI2nYPHkrBvNvN1tk63hwNKkIbCXCNwSptxLo3Ac44waho+jorjyZl8nTLtL2pCjIdcDfw9ASpRdIHb4h8qZ3nGYza35LjbDKPtuSFJaQn0Kl4GaVblruxxCW4Lbs90cb0ksRgfRa0lZ+iR86gw9+IujMFHexNzbL13dV3UilDhJNr+bkzsR4sVpLMZhlllP2W2UJbQPXCRjNR+tnWWtHllaUqenTm2Y4VgYUXAsEE+iSa64Ez3+BCneEpr3qOh/wANR3FG4ZxuwM+nFRmpoEjUeodN6Yiyfd/c4T1wkyA34vgYSAhRRuTzkAfaH2/zlweGR9eGv1Bz8s/qLKOvewQttof/AD3VmwXWXYsYtSWZIS02hTzDiXELWlIBIUkkc0Uh2r2XRYMtuZLvtzkOtkEe6EwCrB+ypxtxbuPkofOivpwvvWXds3OzorFrVbjbSFuOLShttKnHFuKCUIQkZKlKPAA71tUBq4BVkfQtIUyuXbUSEnotoy2soPorhJ88471y92w0u4ZoY3bcGjevNesbF1jN3OajkeLCgSVsnHGUOuJSgj1BIrZvV9iOS8i6RvWTa54QPmtptSR9TXDZdL2GdarTOukf3+bNhx5j7st15Sd8hAeKGmgsNpSnOEgJHA7k5Mh/Q7R+QU2lhsjoWFvsn82lioR25zNvDP639lMewBsL+n0/2u5m+6ekAFm625ZP3femQsZ/EhSgofUUuax/Q9zYgNK1GqImO+px2Fbg1NkXDcAEtpjoUSVAjKSUkDOSOMp75GitOvjCf0g16pnSHgPkiYXUfy1pG0Tp+NvDy5spoj4mpLzbTCgOf1jUNtpCh5hQIrsmU5WHU/b3XNotbnoPuquudmYkx5VyabkluM/FiMSp8xct51XijKHXhlpb20EqSj4EBOMrUeOZSkISpa1BKEglSlcBIph1Xe4twlIZiltq02tCmYmwJQycABToSnjbwEo9B+3isaS0o5qR1q6XNtaLCyvdEjrylVycSSN68HPhg/n086q3RGpk2AchqfsvoVDUM+H6EzSj9STRu+26/wBT0Sq3cY7LtvlyocoW9LqpbCnEKbbuLsQhaWG1KSU7d+zxDngZ7kAtOjXJkzVc+fNd8aW/ZX3n1gktgrlMpQ20D0QkDCflVtvQoT8ZcN2O0uKthUZTJSA34KkeGW0gdBjjjFVdpeCLDqDWUeWvbHskBtsPudTBLq5aHFbf2MZx5UnjdK2KhkdGM7W55ke/twWTlxN1c98lVm82sdwANyPznxXpr6e68IlhivKbWpH6RmrQSClKCRGbJHmoFZ7/AAA969btObv2hkXFQBeZXAekoIHwSY8ltl8EfVRHoRSg9LfuMmbc3xteuD5kFJ6ttABDLWf2UgD8/OpGxSQGNWWFePBu1qnXCFnGEzGmCHUp75ICVf3Ko/kG08ETW/uiIceeff8Azg1XNXhLqShirbd4m58D+3pv5laWS/TtOOeGEuyrMpZU9EB3PRSSSXIm44x3Kc4PoTmnK8261attDMyC4w+4hC3YL2fgcGMrjvZG4A9+MpUAe2FVgxcW3vBKmnmQ8SGHHUkNuqTwoIX0yDUnbbjcbFJXLt2FsuqBn29atrMtPQqQRna55ED8xwpmtw1xmFRH3Jhnfc7kefPrxTtbhkM7TWYUdpo1aNx5D26cFpoeE3dbjJmSC4+5bW4zcBl5ZdDYV4mzG8nhAGEDsTnqBT5dJsezQHrhOBQ2jCWWidrsl09G2wefmewye1VDEkXa0ypE+zKlJYbWtrxS1uAbJ3huSkgpB45z5ZHTNNydN+0jVcdm8zm2VoY+KFDnq91W+hQyVNNhISAcDBWRnjkjrYVuCvrasSvd+mLZb/Dz43WUp60Qx9mMiTmbevlwstNMXZ1nVEG/3tDSkz1rhbnE8W1MjCGHGtxwlI+wfJKyeppu117P5V+mIu9qcYTMU2hqaxIUW0vhsbUOIcAVhWMJIPGAORj4kN1DqHZEGfFejS20kSIkpJS5tPG5J6FJ7EGrJ0Vqf3lDFjuLpM1hrbAfWeZrDSfsKJ/2qAOfxAbuoOLmlmt+i4bJGg5KzxjB2RRMrKN23GQLnnx5X9Dkle2ey/UU9bZ1HdS1FawG47DypT+3oUpW7+qR2wRu+VcWubFYbS/pjTVmipbkzHRIlyXcuyXPFWIrW50844WSkYHGcVd9Uw4/+nPaNeJWSqPZ0uMMjqndGAiDB/eUtYqaqmbTQPl/xBKzcTDLI1nEpsZabaTHYaADbSWmWx2CEAISPyFeGhEm5XrWuo1AFt2Wi0wl9/CjgKXj0P6s153aaLda7pOBwqPFcLX++X+qb/iRTDoa2m16WsTCxh16P769kYVvlKL4CvUApT9KyXwtASZKh3h7n2Vxi7x3YwmWiiituqFFcN2gouVunQVKCTJZUhtZzht4YW2vj8Kgk/Su0kDk1pyo/wCXp86EeCXtHS/Hs8SI6cSrUDAkNqwFoDKltIyOvYp+aD5YDLVW6+Td9OTWr5bFupgXJ5Dd0RHcWw4H0pwQl5nC0pdCQTj7yM5+P4mzRmoUagtLa1r3TImxiUVEbnE4/VvnHHxgHdx9pKh2rlt7WK6dYm4TNVZa11vDQ2/bIMhPhEKblvtKBW+OhZYx93spXfp0+0+Xq2uXe2TLcibIhe9JDa34u3xA3kFSPi7KHB5HB+hgrBoDS9icRKDa505CgpEmftWWlDBBZbSAgEYyDgkedcyMLxs3sE3R1LKZ/alm04aX0B4kb+SUNM6In3pbNy1AyuLa0qDkW2q3JflY5C5PQhHkOCfQcrttCG2kIQhKUNoSlCEIASlKUjASlI4wO1bVhXY+Rr1jGsGy0ZKKpqZaqQyzOu4rGSe4Hpiqk1xKkt3u9W4suIReGLGgvFBShyJCQ8+6hC+5UpSUn0B86tvyGRjr60m+0SL4ljjS8fFb7nDdKupDUgmGoZ8vjST8qjqIxJGQfHzGY9QpKHY+Zj7X9u0L+F81WVYYF1cult/RbC35MFD91eaaGXFxWU7XG0jBJ3jcnHfIHes04+zSIHbpqa5qT/5dmHa46v38vvD8wj86o6GMSSWdpY/ZfVvi2o7HDywfyIHv7Jns9qZuujbLa7zDcSk21iO4y8gtvNFoeG24ARlKwAFCqumQZdrmTbbLIVIhO+GXAMB5pQC2ngP2kkE+RyO1X1SD7Q7TvZh31lHxxNsOeR1MN1f6tw/7tZ/JwntVvWQ9rHlqFgPhzEvkKxu0e4/I+x8j6XVf2pm8r1DbG7JJbjT5MeacugliV4DSnvBkJHBSrGOnHXtkWHpS/Bt42Cey5BfSpSI0GSMORHMFaoiFqPxNEZVHUOwKPuJLqVYVoi6l0nJc+Ee/uQ8np/XGHI4Bxz1IAq5HLbbH5UKe/EYcmwwsRX1tgushYIISrrUdGxpY2Qa6HmOftwR8Sx9niUoGhseoHuuO+aetV/ipYmtkOtZVElM4TJiuYxubX5eYPB8uMiobrabpY5qIU/cl3d49unRtzbcgNK3JeYV1S6jgqTnI68pOTe1cF1tNuvMJ6DPZDjDhCkkHa4y6nO11lfULT2P05BwWZoGyjgRoUlhuKSUDzYbTHZOadCPvzS1YdZNy7Vc13AoFzs8CRNkhICETGGEFXvDSR9AsdifJQyj6CZWqLdrk6Sp6bN2KUrqrwk+Io/UrP5VH6tstz06h9iWFusu5bt9waBSh9KuFod2/ZXtyFDoodM9mjSsf3awWhGPicZVJUfMvrU4CfoRWcx+d7KDYfqSB470/HT0wrNulddhFwDq2+VjzH0XhqhCpqdP2JskLvd3jsrx1THaUner6FQP92rYGAAlGEpSAlIA4AHAAFVrAbM72gWpvqiyWWRNVnoHZGWh/70kfKrLHA46jgin8Ch7GhZzz6/6sqnEJNuodyyQCR16HoRRQB50VdpBZIz3+VAAHSs0UIXFdbbDu9un22YndHmMqaXj7ST9pK05+8kgKHqKoe13K46A1DOjyWlPLhuORnmkK2olMOALTgnOAfgcQcHHTHxHFme0DWX9HIaIUBaTeJzZLROCIkc5SXyk/eJyEDpkE/dwqiUzZAdekKUpyU8tTjkh4lx0qUcqUFLydx6lXX/UQrFl6619cVKWy5EssU52JSyhx8oPTeuSDz6gJ+VeEa4aifWlUnWt4jKUeHAwp6OD5lLLucfJBqu3FOOHeta1k/eWoqV8iTXpHkSY6wplxSMcqGfgI/aT0r3JCuWLJ9qsZpMy3XW0amgoGFNhKEPgeRCUtubvQqPyNT1g11abw+LdNYdtV33eH7nNPDqwSCll0gAntggHyBxxU9mvshKw5EkOxJiQAvwVlPipHfyI9Dn/Wuq5Ou3d52RcFeNIc2FToQ22sKQkISpPhpABAA7V7s30Qr7AAyah9UQ/f9PagigZWu3yVtD/1mU+M3/MkUs6G1TJlL/o/d3i7PZaLtvlrPxTYyByhwnq6jv5gZPKSpb8QCCCAQeCD0IPFco8F8/IUHEtrHRxKFj5KAIqyvZkwW7BNkHn3683CSk+aU7GB/wC01WqWlxC9EdPxwH5UNZPYxXVs8/4atzQbBj6R04g9VxnJJz394ecfz/NVTQM2HvHDJfQPiyr7elpXf5Au9B90zV4yY0eZHkxJCA5Hksux30HotpxJQpPHmDXtRVsvn6oS6MXC0yJUFalKlWSW2/HWr7TyWFiSw6MfjTg4Hcny4vSJKYmxYkxhW5iXHZksq823UBaf86RvaHaR4US/spO+IEQrhjoYji8tun/drPPHRw/hrr9ndwD9okWpZ/XWZ8tIzkkw5BU8wcny+NH9ylIh2cjmbjmPdaDEJPnaSKr/AJN7jvq0+Yv5hOtBooptZ9Vt7XnimxWqOM/rrqlxXqGo7vB/xD8q6bMy0/bbUGHmQ0IMMJUVYygNJTlHmRyMVI+0HT8zUFhLMIb5sKSiaw1kDx9qFNrbBPGSFEj1GO9UpAb1qhf6JgIvSHXVlBiNJktbFKODuSQAn9o8Dz9KXF8MOIMa1rrWKdpKr5Yk21Vt6N8KXqn2i3BBCkIft0BhaSCNraFpUkEfuJp+IB69qTtH6Ja001FkqmSjcXWFpuTbLo9xfUs5SktKSSfD6JUCDyT0VtDlVrDGIo2xjcAOiUc7acSiiiipVyitVrQhC1rUEoQlS1qJwEpSMkk1tUFq+QqNpjUzqThX6LlNAjqC6jwsj86EL541Bd377eLndHif6y+osoP+zYT8DTY+SQAePXvUXRWQCT/mewFCFlOcnpjHxZ6Y9ayrGBt+x/HPrWCR0HT+JPmawDj1B6jzoQsoWttaVoUUrQQpKk8EEdxTRb57cxvCiBIQP1iBxkD7yR5edKxHccg/w9DQlS0KSpClJUk5SpJIIPmCK9BshOEh+RCEe5RVbZVtksTY6ueqFpBSrHY9x3q/bfNYuUCBcGMhmbGYlNg9UpdQF7T6jOD8q+W3bhPfa8F19Sm8gkYSN2Om4gZNX/7N31v6Osm8kqZMxjJ/CiS5tH0GB9KCboVfauZTDvur20cJ3manjH/moiXlH/Fvq2tNthrTumW/wWa2JPz92bJqvPabFLVyblgAInWKUzx952EtSvzw4PyqzLSEJtVnSjlCbfCCD+yGEAUrEzZkfzt9Fd4hUGajpQf4hw6H7WXbRRRTKpF5SWI8qPIjSEBxiQy4w82rottxJQpJ+YNVHZXJGktWCDLdV4KXRapLq+A9DkkLhyj2yDtCvLK/KrhNIvtEsQmW9N4ZbK3ra043NQgZU/bXDlzGB1bP6xPPTd51FI29nDUJ+imDC6GQ9x4seXA+R9LjenoUUv6RvBvVkhvuLC5cbMKaQc7nmQMO/JaSlY/e9KYKkBuLpJzSwlrtQjijiiivVyjiiiihCKKKKEIqI1NEVO09qGIgFTj1smBpI5KnUtlaAPmQKl81ryeeM9RQhfJNZJGMDgfxJ8zTVrGwuWW83KKW1CKrfNtz5B2qjOEqDS1Huk5QPl5HhUoQiiiihCyDj5HqPOsUUUIRX0d7Poq4mkbA2sYW6y7LPqmS848j+UpqjdP2KRebnAtyUqC5Sxv+AnwIw5dfJPHwgHA88DqQD9LsMtR2WWGkhDTLbbLSB0Q22kISkZ8gBQhI3tRhqcsLFxQgqVbZSvFx2jzGlRVfzFumywnNj0+T3tNtJ+sZuve52+NdbfPt0kK8CbHdjuFGN6QsYCkEgjIOCOO1ekOMiFDhQ21KUiJGYjIUvG5SWUJbBOOM8V5bO66LyWhu4e9vsveiiivVyisEJUCCAQQQQeQQeMEVgknjsMZ9aMAeh68UISPYbFcdL6ouLEVp53Tt6YU8wpHxogSWMrSy73CcFSUHv8IySnh6rAOQDWaEaoooooQijiitFK7D6mhC2z8QAxjnNFYSO/8ACihC24rTpwc+QIreihCXdWaXiaothiOqDUpgqegP4JDTxGMLA5KVcBX59q+eLtaLpZJj0G4x1svtk4yCUOozgONL6FJ7Ef5jA+qaj7rZrNe4/ut0htSWQSpAXkLbV03NuIIWD8iKEL5Xoq09T+zC3WuFOukC6SEsR2y4IslhDqic/ZDyVI4/uGqsoQiu622+bcZLMaC0uRNcUn3dhtO5SzkZJyCkAdVFRAAHWnfR/s7iaihM3KXc32mFLUlceOwgOHH4X1qIH/DNW7ZdO2CwMqZtUJtjeE+M6crfex/+R1eVEdwM4GeAKEKJ0ZpFjTURbr/hO3aWkCU82CUMt7t4jsFXO0HknueT9kBLZxRRQhHFHFFFCEcUcUUUIWp456g9aAAeef8ApW1FCEcUcUUUIRxRxRRQharOMY49awkdz+Vb0UIRxRRRQhf/2Q==";
  }
}, 1000);

function stop() {
  let passcodeVal = defuserEl.value;

  if (passcodeVal === "defuse" && counter >= 0) {
    clearInterval(intervalId);
    resultEl.textContent = "Bomb Defused!";
    myImageEl.src =
      "https://th.bing.com/th/id/OIP.MrBHCE5TUPZ8Q9DXLuNlfAAAAA?w=300&h=224&rs=1&pid=ImgDetMain";
  } else {
    clearInterval(intervalId);
    resultEl.textContent = "Bomb Blast!";
    myImageEl.src =
      "data:image/jpeg;base64,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";
  }
}