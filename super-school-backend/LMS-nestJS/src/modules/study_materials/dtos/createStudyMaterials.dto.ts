import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { STUDY_MATERIAL_TYPE } from "helper/constants";
import { Transform } from "class-transformer";

export class CreateStudyMaterialDto {
    @IsEnum(STUDY_MATERIAL_TYPE)
    @ApiProperty({
        description: "Type of Study Material",
        enum: STUDY_MATERIAL_TYPE,

        required: true,
    })
    @ApiProperty()
    @IsString()
    type: string;

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty({ required: false })
    @IsOptional()
    topic: string;

    @ApiProperty({ type: "file", required: false, description: "Study material file" })
    @IsOptional()
    file?: any; // File will be handled by FileInterceptor for "file"

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    url: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    year: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    month: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    @Transform(({ value }) => Number(value))
    batch_id: number;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    @Transform(({ value }) => Number(value))
    subject_id: number;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    @Transform(({ value }) => Number(value))
    grade_id: number;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    @Transform(({ value }) => Number(value))
    term_id: number;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    @Transform(({ value }) => Number(value))
    school_id: number;

    @ApiProperty({ type: "file", required: false, description: "Question paper file" })
    @IsOptional()
    question_paper?: any; // File will be handled by FileInterceptor for "question_paper"

    @ApiProperty({ type: "file", required: false, description: "Paper memo file" })
    @IsOptional()
    paper_memo?: any; // File will be handled by FileInterceptor for "paper_memo"

    // @IsNotEmpty()
    // @IsNumber()
    // teacher_id: number;
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    description: string;
}
