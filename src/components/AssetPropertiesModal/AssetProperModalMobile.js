import React from "react";
import {
  Button,
  Divider,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import styles from "./AssetProperModal.module.css";
import { BsTrashFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { BiMenuAltLeft } from "react-icons/bi";
import { RiAddBoxFill } from "react-icons/ri";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { FiSave } from "react-icons/fi";

const AssetProperModalMobile = ({
  openModal,
  handleCloseModal,
  propertiesDataState,
  darkMode,
  handlePropertiesChange,
  handlePropertiesAdd,
  handlePropertiesRemove,
  handleSavePropeties,
}) => {
  const { t } = useTranslation();

  return (
    <Box>
      <Modal
        sx={{ zIndex: 500000 }}
        open={openModal}
        onClose={handleCloseModal}
      >
        <Box
          bgcolor={darkMode ? "#171c26" : "#fff2f8"}
          color={darkMode ? "#ffffff" : "#121212"}
          className={styles.modalStyleMobile}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              component="div"
              display="flex"
              alignItems="center"
              gap={2}
            >
              <Typography component="span" color="secondary" mt={1}>
                <BiMenuAltLeft fontSize={"1.5rem"} />
              </Typography>
              <Typography variant="h6" component="span" fontWeight={500}>
                {t("PROPERTIES")}
              </Typography>
            </Typography>
            <IconButton onClick={handlePropertiesAdd}>
              <Typography component="span" color="secondary" mt={1}>
                <RiAddBoxFill fontSize={"1.5rem"} />
              </Typography>
            </IconButton>
          </Stack>
          <Divider />
          <Box
            className={styles.propertiesInputFormMobile}
            mt={1}
            component="form"
          >
            {propertiesDataState.map((pd, index) => (
              <div key={index} className="propertiesCard">
                <Stack direction="column" spacing={2}>
                  <Box mb={3}>
                    <Typography variant="subtitle1" component="p">
                      {t("KEY")}
                    </Typography>
                    <Box mb={2}>
                      <input
                        style={{ width: "93%" }}
                        className={styles.inputField}
                        type="text"
                        placeholder="Color"
                        value={pd?.key}
                        name="key"
                        onChange={(e) => handlePropertiesChange(e, index)}
                      />
                    </Box>
                    <Typography variant="subtitle1" component="p">
                      {t("VALUE")}
                    </Typography>
                    <Box>
                      <input
                        style={{ width: "93%" }}
                        className={styles.inputField}
                        type="text"
                        placeholder="Blue"
                        value={pd?.value}
                        name="value"
                        onChange={(e) => handlePropertiesChange(e, index)}
                      />
                    </Box>
                    {propertiesDataState.length > 1 ? (
                      <Stack alignItems="flex-start" mt={1}>
                        <Button
                          variant="outlined"
                          className={styles.deleteButton}
                          onClick={() => handlePropertiesRemove(pd.id)}
                          color="error"
                        >
                          <Typography component="span" color="secondary">
                            <BsTrashFill />
                          </Typography>
                        </Button>
                      </Stack>
                    ) : (
                      <Stack sx={{ opacity: 0 }}>
                        <Button
                          variant="outlined"
                          className={styles.deleteButton}
                          color="secondary"
                        >
                          <Typography component="span" color="secondary">
                            <BsTrashFill />
                          </Typography>
                        </Button>
                      </Stack>
                    )}
                  </Box>
                </Stack>
              </div>
            ))}
            <Box className={styles.buttonBox}>
              <Button
                className={styles.buttonStyles}
                onClick={handleCloseModal}
                variant="outlined"
                color="pink"
              >
                <Typography component="span" mt={1}>
                  <AiOutlineCloseSquare color="#E552FF" />
                </Typography>
                <Typography variant="body2" component="span" color="#e552ff">
                  {t("CLOSE")}
                </Typography>
              </Button>
              <Button
                disableElevation
                color="pink"
                variant="contained"
                onClick={handleSavePropeties}
                className={styles.buttonStyles}
              >
                <Typography component="span" color="#ffffff" mt={1}>
                  <FiSave />
                </Typography>
                <Typography variant="body2" component="span" color="#ffffff">
                  {t("SAVE")}
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default AssetProperModalMobile;
